const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;


app.use(express.json());

app.use(express.static('public'));



app.get('/animes', (req, res) => {
  fs.readFile('anime.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer los datos');
      return;
    }

    const animes = JSON.parse(data);
    res.json(animes);
  });
});


app.get('/animes/:id', (req, res) => {
  const id = req.params.id;

  fs.readFile('anime.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer los datos');
      return;
    }

    const animes = JSON.parse(data);
    const anime = animes[id];

    if (anime) {
      res.json(anime);
    } else {
      res.status(404).send('Anime no encontrado');
    }
  });
});

app.post('/animes', (req, res) => {
  const anime = req.body;

  fs.readFile('anime.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer los datos');
      return;
    }

    const animes = JSON.parse(data);

    
    const newId = Object.keys(animes).length + 1;


    animes[newId] = anime;

    fs.writeFile('anime.json', JSON.stringify(animes), 'utf8', (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al guardar los datos');
        return;
      }

      res.send(`Nuevo anime creado con ID: ${newId}`);
    });
  });
});


app.put('/animes/:id', (req, res) => {
  const id = req.params.id;
  const updatedAnime = req.body;

  fs.readFile('anime.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer los datos');
      return;
    }

    const animes = JSON.parse(data);
    const anime = animes[id];

    if (anime) {
      Object.assign(anime, updatedAnime);

      fs.writeFile('anime.json', JSON.stringify(animes), 'utf8', (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error al guardar los datos');
          return;
        }

        res.send(`Anime actualizado con ID: ${id}`);
      });
    } else {
      res.status(404).send('Anime no encontrado');
    }
  });
});


app.delete('/animes/:id', (req, res) => {
  const id = req.params.id;

  fs.readFile('anime.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al leer los datos');
      return;
    }

    const animes = JSON.parse(data);
    const anime = animes[id];

    if (anime) {
      delete animes[id];

      fs.writeFile('anime.json', JSON.stringify(animes), 'utf8', (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error al guardar los datos');
          return;
        }

        res.send(`Anime eliminado con ID: ${id}`);
      });
    } else {
      res.status(404).send('Anime no encontrado');
    }
  });
});


app.listen(PORT, () => {
  console.log(`Iniciando en el puerto ${PORT}`);
});
