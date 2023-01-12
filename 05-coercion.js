/*
    JavaScript es un lenguaje debilmente tipado.
    La coerción consiste en transformar de un tipo de dato a otro de una variable. 
    Existen dos tipos de coerción: implícita y explícita.

    Qué es la coerción implícita
    La coerción implícita consiste en la transformación de tipos mediante la ayuda 
    de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un 
    lenguaje débil y dinámicamente tipado.

    Al momento de compilar el código, el motor de JavaScript, si encuentra alguna 
    incoherencia (una suma de un número con un string), el motor lo interpreta a su 
    manera y arroja un valor que puede ser erróneo.
*/
var coercionDeContatenacion = 4 + '7';
var coercionDeMultiplicacion = 4 * '7';
var coercionDeBoleanos = 4 + true;
var coercionDeBoleanosMultiplicacion = 4 * false;


console.log(`Resultados: ${coercionDeContatenacion}, ${coercionDeMultiplicacion}, ${coercionDeBoleanos}, ${coercionDeBoleanosMultiplicacion}`)
/*
    Qué es la coerción explícita
    La coerción explícita es la transformación de tipos de datos que controlamos el 
    resultado. Para realizar estas transformaciones utiliza las funciones 
    Number(), String() y Boolean(), para convertir a tipo número, string y lógico, 
    respectivamente.
*/

var coercionNumber = Number('12345');
var coercionString = String(12345);
var coercionBoolean = Boolean(1);

console.log(`Resultados: ${coercionNumber}, ${coercionString}, ${coercionBoolean}`);


/*
    Si utilizamos la convercion de parseInt(), analizara el dato hasta que haya otro
    valor diferente a un numero, por lo que devovera solamente los datos numericos

    A diferencia de Number(), si encuentra otro dato que no sea numero devolvera NaN 
    No a Number
*/
var parse = parseInt('123asd');
var number = Number('123asd');

console.log(`Resultados: ${parse}, ${number}`);