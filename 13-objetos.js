/*
    Un objeto es una estructura de datos que permite almacenar 
    valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y 
    separados por comas.

    En las propiedades del objeto es opcional colocar las comillas. 
    En el caso de que haya espacios, es obligatorio.
*/

var objeto = {
    clave1: "valor1",
   "clave 2": "valor2",
}

/* 
    Qué son los atributos y métodos
    En programación orientada a objetos, un objeto es una representación de 
    la realidad, en el cual sus características propias se definen como atributos 
    y sus acciones se definen como métodos.

    En otras palabras, los atributos son las variables y los métodos son las 
    funciones propias de cada objeto.

    Por ejemplo, definamos el objeto miAuto. Se coloca entre comillas la 
    propiedad año porque el lenguaje no admite caracteres especiales del español. 
    Aunque en ciertas situaciones si admite.
*/

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log("Es un auto")
    }
}

/* 
    Cómo acceder a los valores de un objeto
    A diferencia de los arrays, únicamente es necesario saber la 
    propiedad del objeto para acceder a su valor.

    Existen tres formas para acceder al valor de un objeto:

    Mediante la notación de corchetes.
    Mediante la notación de punto.

    Qué es la notación de corchetes
    La notación de corchetes ya ese familiar para ti, similar a los arrays, 
    indicamos entre corchetes la propiedad del objeto entre comillas.
    objeto["propiedad"]

    Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.
*/

miAuto["marca"] // "Toyota"
miAuto["modelo"] // "Corolla"
miAuto["año"] // 2020
miAuto["detalle"] // ƒ detalle()

/* 
    Observa que cuando accedes a un método, únicamente muestra la función, 
    esto sucede porque la propiedad guarda dicha función que aún no es ejecutada. 
    Para ejecutarla hay que utilizar los paréntesis.   
*/

miAuto["detalle"]();                    // Las funciones con comillas lleva ()
var propiedadObjeto = "marca";
console.log(miAuto[propiedadObjeto]);   // Las propiedades guardadas en variables devuelve el valor correcto
console.log(miAuto['nombre']);          // Las propiedades que no se encuentran en el objeto son undefined


/*
    Qué es la notación de punto
    La notación de punto indicamos con un punto la propiedad del objeto. 
    Si existen espacios, la única forma de acceder a esa propiedad es 
    mediante la notación de corchetes.

    objeto.propiedad

    Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.
    Es la mas utilizada en el mundo del desarrollo de software para programacion con
    JavaScript
*/
miAuto.marca // "Toyota"
miAuto.modelo // "Corolla"
miAuto.añó // 2020
miAuto.detalle // ƒ detalle() muestra el nombre de la funcion.

miAuto.detalle() //La forma correcta de llamar a una funcion.

/*
    Cómo añadir propiedades de un objeto
    Para añadir propiedades de un objeto, utilizamos la notación de corchetes o de punto 
    con la nueva propiedad, asignándole su respectivo valor.

    Por ejemplo, añadamos la propiedad color del objeto miAuto.
    De igual forma sirve para cambiar las propiedades de un valor;
*/

miAuto.conductor = "Miguel Angel Perez";

delete miAuto.conductor

/* 
    El objeto contexto this
    En JavaScript, el objeto contexto this hace referencia a diferentes 
    valores según su contexto de ejecución. Como es un tema complejo de 
    programación orientada a objetos, no profundizaré.

    En objetos, el contexto this hace referencia al propio objeto. Esto sirve 
    para acceder a los atributos y métodos propios del objeto. 

*/

miAuto.impresionDatos = function (){return console.log(`${this.marca}, ${this.modelo}`)};
console.log(miAuto.impresionDatos());
console.log(miAuto);