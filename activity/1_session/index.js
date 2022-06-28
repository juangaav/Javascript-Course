// Ejercicio 1

import { message } from './aboutme.js';

console.log("Ejercicio 1");
alert(message);

// Ejercicio 2
console.log("Se ejecuta primero el contenido del fichero aboutme.js.");

// Ejercicio 3

console.log("La herramienta Elements muestra el codigo HTML utilizado para armar la pagina que se esta observando,junto con su respectivo codigo CSS.");

console.log("La consola se encarga de todas las operaciones con JavaScript, asi como brindar información sobre los elementos interactivos de una página. En la consola es posible escribir JavaScript para interactuar con la página web que se está observando, y también permite al desarrollador escribir mensajes de prueba en el JavaScript de los sitios web, que luego se muestran en Console para mostrar que el codigo JavaScript fue ejecutado.");

console.log("La pestaña Red muestra todos los archivos que se están cargando en la URL en cuestión.");

// Ejercicio 4
var i = 1;
for(i; i <= 100; i++)
{
    if(i%7 == 0)
    {
        console.log(i);
    }
}

// Ejercicio 5  (No se puede hacer)
console.log("Ejecutar un archivo JS en formato " +'<script type="module">'+ " fuerza a que el codigo se ejecute en modo strict. En cambio, con el formato <script> se ejecuta en en modo non-strict por defect. Para ejecutarlo en modo strict con el formato <script>, se usa 'use strict'");


// Ejercicio 6
let formatter = {
    prefix: 'Hello',
    append(stringToAppend) {
        return this.prefix + " " + stringToAppend
    }
};

console.log(formatter.append('World'));

formatter.__proto__toLowerString = function(string){
    return string.toLowerCase();
}

console.log(formatter.__proto__toLowerString('HOLA MUNDO'));