/* 
    Los condicionales son estructuras de control que te permiten 
    evaluar diferentes expresiones y realizar determinadas acciones en JavasScript.

    Cómo utilizar el condicional ifen JavaScript
    Un condicional evalúa si una expresión o condición es verdadera. Por ejemplo, 
    si mi edad es mayor o igual que 18, puedo conducir.

*/

if (10 > 1) {
    console.log('Correcto');
}

/*
    La palabra reservada else evalúa cuando la expresión del if es falsa, pero no es 
    obligatorio colocarlo.
    En otras palabras, si (if) una acción (expresión) es verdadera (true) hago una 
    acción (bloques de código). En el caso contrario (else) efectúo otra acción.
*/

if (10 > 1) {
    console.log('Correcto');
}else{
    console.log('Incorrecto');
}

/*
    Cómo anidar condicionales al programar
    Has aprendido a usar un condicional, pero ¿y si tenemos varias condiciones? 
    Entonces empleamos las palabras reservadas else if junto a la condición a ejecutar, 
    puedes utilizar varias condiciones que necesites. Sin embargo, JavaScript evalúa la 
    primera condición, luego a la segunda, y así sucesivamente. Esto es importante para 
    ordenar las condiciones correctamente y no sobreescribirlas.
*/

if (condicion1){
    // Bloque 1
 } else if (condicion2){
     // Bloque 2
 } else if (condicion3){
    // Bloque 3
 } else {
     // Bloque else
 }

 /*
    Operador ternario
    El operador ternario consiste en evaluar si una expresión es verdadera o falsa. 
    Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar 
    una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: 
    "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), 
    ejecuta el “Bloque falso”.
 */
(20 > 10) ? true : false;