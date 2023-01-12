/*
    Un bucle (loop) o ciclo repetitivo es una estructura de control que 
    te permite realizar una o varias instrucciones mientras una condición sea verdadera.

    Existen dos tipos de ciclos repetitivos:

    For (para)
    While (mientras)
    
    
    Qué es un ciclo for
    Para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o 
    varias instrucciones.

    Por ejemplo, si queremos los 10 primeros números, sabemos que el ciclo se repetirá 
    10 veces. Si accedemos a los elementos de un array, sabemos que el ciclo se repetirá length veces.

    La condición consta de tres partes:

    Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. 
    Esta variable puede ser declarada dentro o fuera de la condición.
    Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
    Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.
    Cada una de las partes debe estar separada por un punto y coma ( ;).
*/

var nombreEstudiantes = ['Andres', 'Miguel', 'Maria', 'Rosa'];

function saludaEstudiantes(estudiantes) {
    for (var i = 0; i < estudiantes.length; i++){
        console.log(`Hola ${estudiantes[i]}`);
    }
}
saludaEstudiantes(nombreEstudiantes);

/*
    Qué es un ciclo for … of
    El ciclo for ... of es una variación del ciclo for que se utiliza para recorrer los valores de los 
    elementos de un array.

    La estructura del ciclo for ... of es la siguiente:

    La variable elemento es la referencia a cada uno de los elementos del array. Este puede tener 
    cualquier nombre, por eso se inicia con var, debido a que es una variable como el índice i en 
    el bucle for.

    Limitaciones del ciclo for … of
    El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, 
    si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y 
    cambiar su valor.
*/

for(var estudiantes of nombreEstudiantes){
    console.log(estudiantes);
}