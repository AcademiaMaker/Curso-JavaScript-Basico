/*
    Existen métodos de arrays para recorrerlos, y devolver un valor o 
    un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

    Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

    Cómo utilizar el método filter
    El método filter consiste en crear un nuevo array a partir de los elementos originales 
    filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. 
    Si la condición se cumple, retorna el elemento completo.

    El método filter recibe dos argumentos:

    La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
    Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, 
    será undefined. Recuerde que this es diferente según el lugar donde sea invocado. 
    
    La función, que recibe como argumento el método filter, utiliza tres parámetros:

    El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer 
    elemento, y así sucesivamente.
    El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
    El array que está iterando.
*/

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]


articulos = articulos.filter(function(articulos)
    {return articulos.costo > 2000}
    );
console.log(articulos);

/*
  Cómo utilizar el método map
    El método map es inmutable y consiste en crear un nuevo array a 
    partir de los elementos originales transformados mediante una función (callback).

    El método map recibe dos argumentos:

    La función que itera y transforma cada elemento del array (obligatorio).
    Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, 
    será undefined. Recuerde que this es diferente según el lugar donde sea invocado.
*/

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

articulos = articulos.map(function(articulo){return articulo.costo});
console.log(articulos);