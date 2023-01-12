/*
    Para realizar operaciones en JavaScript es necesario conocer los 
    diferentes tipos de operadores que necesitarás. Los tipos de operadores 
    en el lenguaje son: aritméticos, asignación y comparación.

    Qué son los operadores aritméticos
    Los operadores aritméticos se utilizan para efectuar operaciones matemáticas.
    Para realizar las operaciones básicas, como suma, resta, multiplicación y división; 
    utiliza los siguientes operadores:

    Conocidos como operadores binarios
*/

1 + 1;
1 * 1;
1 - 1;
1 / 1;

1 / 0;      //No existe la division con 0 en su caso devolvera el valor Infinity
2 % 1;      //Operador modulo para devolver el residuo de una division


/*
    Qué es el operador de concatenación
    El operador de concatenación consiste en unir dos o más strings.

    El operador de concatenación es semejando al operador de suma, pero no es el mismo. 
    Si utilizas este operador con diferentes tipos de datos, JavaScript ejecutará una 
    coerción implícita.
*/

"Hola" + "Jose";

/*
    Cómo utilizar el operador de incremento y decremento
    El operador de incremento (++) y decremento (--) consiste en aumentar o disminuir una
    unidad a una variable, respectivamente. Estos operadores se pueden emplear antes y 
    después de la variable.
*/

var numeroMas = 1;
var numeroMenos = 1;

numeroMas++
numeroMenos--

/*
    Sin embargo, si se emplea antes o después, el comportamiento es diferente. Si está previamente, 
    el valor de la variable aumenta y devuelve el valor actual. Si está después, el valor de 
    la variable aumenta, pero devuelve el valor anterior.
*/

console.log(numeroMas++) //3
console.log(++numeroMas) //4
console.log(numeroMas) //4
console.log(numeroMas) //4

/*
    Qué son los operadores de asignación
    En la clase de variables aprendiste un operador de asignación (=). Este operador es diferente
    a los operadores de igualdad (== y ===).

    El operador de asignación (=) consiste en asignar un valor a una variable.
*/

var saludo = "Hola Mundo";

/*
    Operadores de asignación combinada
    En ciertos casos, reasignarás la misma variable más otro valor. Estas variables pueden utilizarse 
    como acumuladores o contadores.

    Asignación de suma	            a += b	a = a + b
    Asignación de resta	            a -= b	a = a - b
    Asignación de multiplicación	a *= b	a = a * b
    Asignación de multiplicación	a /= b	a = a / b
*/

var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador);

/** 
    Qué son los operadores de comparación
    Un operador de comparación compara dos o más valores y devuelve un valor lógico (verdadero o falso).

    Qué son los operadores de igualdad
    Existen dos tipos de igualdad:

    Igualdad por valor (==): compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.
    Igualdad por valor y tipo de dato (===): compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.

*/

//Igualdad
"3" == 3 // true
3 == 3 // true

// Igualdad estricta
"3" === 3 // false
3 === 3 // true

/* 
    Qué son los operadores de desigualdad
    Igualmente que los operadores de igualdad, existen dos tipos:

    Desigualdad por valor (!=)
    Desigualdad por valor y tipo de dato (!==) 
*/

//Desigualdad
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta
"3" !== 3 // true
3 !== 3 // false

/*
    * Qué son los operadores de mayor o menor
    Los operadores de mayor o menor evalúan intervalos, dependiendo 
    si el valor especificado está incluido o no incluido.  

 */

// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true

/*
    Qué son los operadores lógicos
    Los operadores lógicos comparan dos o más expresiones y devuelve un valor
    lógico (verdadero o falso). Las expresiones son comparaciones entre valores, 
    se utiliza en conjunto con los operadores de comparación.

    Qué es el operador disyunción lógico
    El operador de disyunción o AND (&&) devuelve verdadero, si y solo si ambas 
    expresiones son verdadero. Se lee de la siguiente manera: “La expresión 1 es 
    verdadero Y la expresión 2 es verdadero, entonces es verdadero”.

*/

var a = 15
var b = 5

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false

/*
    Qué es el operador unión lógico
    El operador de unión u OR (||) devuelve verdadero, si y solo si, alguna expresión 
    es verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero O la expresión 
    2 es verdadero, entonces es verdadero”.
*/

var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true

/*
    Qué es el operador negación lógico
    El operador de negación o NOT (!) devuelve el valor lógico contrario a la expresión. 
    Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.
*/

var a = 5

!(a < 0) // true