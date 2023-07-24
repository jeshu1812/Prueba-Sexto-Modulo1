##Los codigos los probe en New Request##

##Anime##
Instrucciones

Lee con atención cada uno de los requerimientos que se presentan a continuación y desarrolla la prueba de acuerdo con lo solicitado.
Descripción

Dentro del marco de lo aprendido durante este Drill, hemos podido desarrollar servidores con Node y consumir archivos externos haciendo uso de ésta y otras tecnologías.
Requerimientos

    Crear un servidor con Node.js.
    Crear un archivo principal llamado index.js.
    En un archivo aparte, llamado anime.json, guardar los datos con la siguiente información:

    {
  "1": {
    "nombre": "Akira",
    "genero": "Seinen",
    "año": "1988",
    "autor": "Katsuhiro Otomo"
  },
  "2": {
    "nombre": "Dragon Ball",
    "genero": "Shonen",
    "año": "1986",
    "autor": "Akira Toriyama"
  },
  "3": {
    "nombre": "Sailor Moon",
    "genero": "Shojo",
    "año": "1992",
    "autor": "Naoko Takeuchi"
  },
  "4": {
    "nombre": "Naruto",
    "genero": "Shonen",
    "año": "2002",
    "autor": "Masashi Kishimoto"
  },
  "5": {
    "nombre": "Neon Genesis Evangelion",
    "genero": "Mecha",
    "año": "1995",
    "autor": "Yoshiyuki Sadamoto"
  }
}

    _Crear un programa que permita hacer el CRUD completo de los datos. El ID será el primer argumento para acceder a las propiedades de cada anime.
    _Se deberá poder listar todos los datos del archivo y, además, leer los datos de un anime específico, accediendo por su ID y/o por su nombre.
    _Realizar un test para poder probar la respuesta del servidor que fue creado.
