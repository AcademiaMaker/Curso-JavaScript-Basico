/* 
    Las funciones son bloques de código que solucionan un problema específico para ser reutilizados. 
    Existen dos tipos de funciones: declarativas y expresivas.

    Qué son las funciones declarativas
    En JavaScript, las funciones declarativas se las declara con la palabra reservada function.

    Cómo declarar una función declarativa
    La declaración de una función declarativa está constituido por las siguientes partes:

    La palabra reservada function.
    El nombre de la función: el cual será guardado como referencia en memoria.
    Los parámetros: están envueltas en paréntesis (), son variables propias de la función 
    y deberán utilizarse en el contenido. Hacen referencia a los argumentos en la invocación.
    El contenido: está envuelto por llaves {}, contendrá las líneas de código correspondientes 
    a la lógica del problema.
    El valor retornado: es un único valor que devuelve la función cuando es llamada. 
    Se lo especifica por la palabra reservada return. Si no existe, la función 
    devolverá un valor undefined por defecto
*/

function nombreDeLaFuncion(valor1 , valor2) {       //Si la funcion no devuelve un valor de retorno sera undefined
    return valor1 + valor2;                         //La funcion puede tener parametros, son variables internas de la funcion
}

/*
    Cómo invocar una función declarativa
    La invocación o llamada es la manera que utilizamos las funciones para utilizar el valor 
    de retorno (return) según ciertos argumentos. La invocación de la función declarativa está 
    constituido por dos partes:

    El nombre de la función especificada en la declaración.
    Los argumentos, son los valores para cada uno de parámetros de la función envueltos entre paréntesis.
*/

nombreDeLaFuncion(10,5);        //La forma de invocar una funcion con lo argumentos.

/*
    Plantillas literales
    También puedes utilizar las plantillas literales, una nueva característica del lenguaje para utilizar 
    las variables dentro de ${variable} entre las tildes invertidas ( `` ), una forma muy util de mandar 
    una concatenacion de strings
*/

function mandarSaludo(nombreDelDestinaraio) {
    return `"Hola" ${nombreDelDestinaraio}`;
}

console.log(mandarSaludo('Jose'));

/*
    Qué son las funciones expresivas o anónimas
    Las funciones expresivas o anónimas consisten en guardar la función en una variable. 
    Tienen la misma declaración e invocación que las funciones declarativas. La diferencia consiste 
    en no especificar un nombre en la función, sino que utiliza el nombre de la variable.

    Son utilizadas en funciones que tienen como parametro otra funcion.
*/

var solicitarPrestamos = function (cantidad, nombreDelSolicitante) {
    return `El prestamo de: ${cantidad} se autorizo a: ${nombreDelSolicitante}`;
}

solicitarPrestamos(5000, 'Jose');       //A pesar de declararse como una variable la funcion debe contener los dos () 
                                        //en la invocacion de la funcion

/*
    A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. 
    Ya que el hoisting solo se aplica en las palabras reservadas var y function.

    Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función 
    antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla 
    primero, y después mandarla llamar.
*/

/* 
    Funciones de contructor, utilizadas en el ambito de JavaScript, es muy importante enteder 
    para que se utilza cada una de ellas. 
*/

var solicitarUsuario = new function(nombre, cantidad){}

