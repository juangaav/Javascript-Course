// *****************Ejercicio 1**************
let cat = {
  color: 'Black',
  name: 'Arthur',
  age: 6
};

function printArray(cat){
  return [cat.color, cat.name, cat.age];
}

console.log(printArray(cat));

// *****************Ejercicio 2*****************

console.log('1) *this* (fuera de una funcion) sin ningun contexto apunta al objeto global, ya que *this* esta ejecutandose en el scope global.');

console.log(this === window);

z = 25;
console.log(window.z); // 25

this.x = "Prueba";
console.log(window.x)  // "Prueba"
console.log(x)         // "Prueba"

console.log('2) Por otro lado, dentro del metodo de una funcion, *this* apunta al objeto. En el siguiente ejemplo, this apunta al objeto Vehicle.');

const vehicle = {
  vehicleDescription: "Transport Vehicle",
  numberOfWheels: "4",
  vehicleSize: "big",
  vehicleName: "bus",
  description : function() {
    return this.vehicleDescription + ": " + this.vehicleName + ", " + this.vehicleSize + ", " + this.numberOfWheels;
  }
};

console.log(vehicle.description()); // "Transport Vehicle: bus, big, 4"

console.log('3) En una funcion en modo estricto, *this* toma el valor undefined.');

function strictModeExample() {
  'use strict'; // Usar strict mode
  return this;
}

strictModeExample() === undefined; // true

console.log('4) Con el metodo call(), es posible llamar un metodo que pertenece a una clase diferente a la que esta haciendo el llamado.');

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

const cheese = new Food('feta', 5);

console.log('5) Con el metodo bind(), es posible prestar un metodo que pertenece a otro objeto. Adicionalmente, en ocasiones debe usarse el metodo bind() para no perder el estado de *this*.');

const person = {
  firstName:"Pedro",
  lastName: "Gomez",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  }
}

let showPerson = person.display.bind(person);//En esta parte se usa bind para no perder el estado de *this*, ya que se esta llamando la funcion como callback
setTimeout(showPerson, 3000);

console.log('6) El metodo apply() es muy similar al metodo call(), pero acepta argumentos en formato de arreglo.');

function Toy(name, price) {
  let params = [name, price];
  Product.apply(this,params);
  this.category = 'toy';
}

const fun = new Toy('robot', 40);
console.log(fun.category); // toy

console.log('7) En los controladores de eventos (event handlers), this apunta al elemento HTML que recibio el evento.');

// <button onclick="this.style.display='none'">
//  Ejemplo Boton
//</button> 

console.log('8) Por ultimo, con la variable *globalThis* es posible obtener el valor global de *this*, lo que es igual a acceder al objeto global:');
function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(canMakeHTTPRequest());// true

// ***************Ejercicio 3*****************

class InvertirCadena {
  cadenaInvertir = "";
  constructor(cadenaInvertir) {
    this.cadenaInvertir = cadenaInvertir;
  }

  getCadenaInvertir(){
    return this.cadenaInvertir
  }

  imprimeCadenaInvertida = () => {
    var cadenaOriginal = this.cadenaInvertir;
    if(cadenaOriginal){
      let cadenaInvertida = "";
      for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
        cadenaInvertida += cadenaOriginal[i];
      }
      console.log("Cadena Invertida: " + cadenaInvertida);
    }else{
      throw 'Cadena vacia.';
    }
  }
}

let invertirCadena = new InvertirCadena("Master en FullStack Development");
try {
  invertirCadena.imprimeCadenaInvertida();
} catch (e) {
  console.error(e);
}

//Respuestas
//¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?
//Por medio de la expresión try/catch, podemos capturar el error y mostrarlo con el comando throw, y asi continuar con la ejecución de la aplicación.

//Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función. ¿Cuál es el resultado?. 
//Con la cadena "Master en FullStack Development", arroja lo siguiente: tnempoleveD kcatSlluF ne retsaM

//invertirCadena.nuevoMetodo(); - error
InvertirCadena.prototype.nuevoMetodo = function() {
  console.log("Llamando desde nuevoMetodo");
}
invertirCadena.nuevoMetodo();

// Ejercicio 4

var Login = /** @class */ (function () {
  function Login(username, password) {
      this.username = username;
      this.password = password;
  }
  Login.prototype.login = function (username, password) {
      if (this.username === 'admin' && this.password === 'passwd') {
          return true;
      }
      else {
          return false;
      }
  };
  return Login;
}());

//Ver en TSPlayground en typescript:
//https://www.typescriptlang.org/play?#code/MYGwhgzhAEAyD2BzAlgO2gbwFDWgVwgFMAnVMAW0IC5oIAXYtRAbh2gAdIIB3eYgExr1GqFm2DxUwvMDp8AFARJlKQhkwA0HLrwFqRiAJSY2uOgAtkEAHRLSFQtAC8+IvcqtcZyzc5Rd-M7a-nz8ntAAvlhsIEho8sbYXtDIAGbQ8hZWtm4qjk4F0ADkYPzkaEXQAGRV0Fm+OqHOhUV+PPxFiaZeYCAkdPJFAKpu0LGIiISBaNad4cnEhHR4pHXEeITzkdCEIEQmycm9-YMjJNB8wTxNaBLEi7Kzhlu4i8urqb1EW1G4UVFYPp0MZxdAuVCEbhwUGDUrlVBFLStHQdYwAejR0GOxGBAFoAHzQM7EEETKYpVCA0HWcbxZ6ApakgBGpSCEKhCBQqEG7EIvMRxRZqOgGKxfRx0AJRNGlza3GmqDuDzoVMQQppMPpQA

// Ejercicio 5

//ver index.html

// Ejercicio 6

//ver index.html
