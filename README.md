# grunt-base
===================
Grunt base for new projects.

###Uso
```bash
$ npm install grunt && npm install && grunt build
```

###Tareas
```bash
$ grunt build : Limpia la carpeta build y procesa source
$ grunt serve : Inicia el servidor y vigila cambios
$ grunt watch : Vigila los cambios
```

###Estructura de trabajo
Se procesan todos los archivos creados y modificados bajo la siguiente estructura.\n

En caso de crear carpetas (como font o img u otros) realizar un build.\n

source \n
├─ css \n
|   ├─ libreria.min.css (No se incluyen automaticamente en el html) \n
|   ├─ _propio.scss \n
|   └─ style.scss \n
├─ font \n
|   └─ webfont.* \n
├─ img \n
|   └─ imagen.* \n
├─ js \n
|   ├─ lib \n
|   |   └─ libreria.js (No se incluyen automaticamente en el html) \n
|   ├─ script2.js \n
|   └─ script.js \n
└─ otros \n
     └─ otro.* 