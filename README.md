# grunt-base
===================
Grunt base para nuevos proyectos.
Ultimo - v1.7

###Uso
```bash
$ npm install grunt && npm install && grunt build
```

###Tareas
```bash
$ grunt build : Limpia la carpeta build y procesa source
$ grunt serve : Inicia el servidor y vigila cambios
$ grunt expose : genera una url inicia el servidor y vigila cambios
$ grunt watch : Vigila los cambios
```

###Estructura de trabajo
Se procesan todos los archivos creados y modificados bajo la siguiente estructura.

En caso de crear carpetas (como font o img u otros) realizar un build.

```bash
source
├─ css
|   ├─ libreria.min.css (No se incluyen automaticamente en el html)
|   ├─ _propio.scss
|   └─ style.scss 
├─ font
|   └─ webfont.*
├─ img
|   └─ imagen.*
├─ js
|   ├─ lib
|   |   └─ libreria.js (No se incluyen automaticamente en el html)
|   ├─ script2.js
|   └─ script.js 
└─ otros
     └─ otro.*
```