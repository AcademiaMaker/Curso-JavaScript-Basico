/*
    Solo pasa con versiones pasadas de JavaScript, porque solo sucede
    con palabras clave var y function.

    Hoisting es un término para describir que las declaraciones de variables 
    y funciones son desplazadas a la parte superior del scope más cercano, 
    scope global o de función. Esto sucede solamente con las declaraciones y 
    no con las asignaciones.

    El código permanece igual, solo es una interpretación del motor de JavaScript. 
    En el caso de las variables solamente sucede cuando son declaradas con var.
*/

var nombreDeVariable;       //Declarando una variable
nombreDeVariable = 0;       //Inicializando una variable


/*
    Cuando mandas a llamr a una variable o funcion antes de ser declarada es 
    donde se produce el hositing
*/

console.log(valor);     //Mandar a llamar la variable antes de ser inicializada
var valor = 10;         //JavaScript toma la declaracion de var y le aplica un valor undefined

/*
    El mismo problema pasa con las funciones, llamar una funcion antes de que esta
    sea declarada aplica el hoisting dentro de la programacion.

    OJO:
    Las funciones se declaran antes que las variables. Por lo que los datos de las variables 
    o parametros seran de undefined.

    Por eso es necesario declarar las funciones en las primeras lineas del codigo y despues
    mandarlas a llamar despuesd de inicializar nuestros valores de las variables.
*/

saludo();
function saludo(params) {
    return `Hola ${params}`;
}