 /*
    Un array es una estructura de datos que permite almacenar una serie de datos 
    localizados por índices y separados por comas.

    Qué son los índices
    El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, 
    los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array 
    se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

*/

var arrays = [1,2,3,4];

/*
    Para acceder a los arrays se hace por medio de un indice en el array

    Para saber la cantidad de elementos de un array se utiliza la propiedad length.
    Ten en cuenta que la posición del elemento es diferente al índice del mismo.

    Entonces, para acceder a un elemento del array, únicamente podrás utilizar los índices 
    desde el 0 hasta array.length -1. Si se accede a un índice que no existe, 
    devolverá undefined.
*/

arrays[1];                       //el numero dentro de [] es el indice del array
console.log(arrays.length);      //propieda del objeto array o estructura de datos
arrays[4];                       //Si se accede a un índice que no existe, devolverá undefined.

/*
    Qué es la mutabilidad en los arrays
    La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar. 
    Esto permite cambiar los valores de los elementos de un array cuando accedemos a 
    sus elementos mediante un índice.

    Por ejemplo, cambiemos el segundo elemento con índice 1 al valor de “Platzi”:
*/

arrays[1] = 'Hola';              //La mutacion del array tendra lso siguientes datos
console.log(arrays);             //[1, 'Hola', 3, 4]

/*
    Qué son los métodos de arrays
    Los métodos de arrays son funcionalidades extra. Es semejante a las funciones, 
    pero se accede mediante la notación punto array.metodo(argumentos).

    Existen métodos mutables, es decir, que cambian el array original. Estos métodos son:

    push
    unshift
    pop
    shift

    Cómo utilizar el método push
    El método push agrega uno o varios elementos al final del array original. 
    El método recibe como argumento los valores a agregar. Retorna el número de 
    elementos del array mutado.


    Cómo utilizar el método unshift
    El método unshift agrega uno o varios elementos al inicio del array original. 
    El método recibe como argumento los valores a agregar. Retorna el número de 
    elementos del array mutado.
    
    Cómo utilizar el método pop
    El método pop extrae el elemento del final del array original.

    Cómo utilizar el método indexOf
    El método indexOf muestra el índice del elemento especificado como argumento.
*/

arrays.push(6,7,8,9,10);             //Metodo con argumentos
arrays.unshift(-3,-2,-1,0);          //Metodo con argumentos
arrays.pop();                        //metodo sin argumentos
arrays.shift();                      //metodo sin argumentos

console.log(arrays);

console.log(arrays.indexOf(6));