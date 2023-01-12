/*
    Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una 
    coerción de cualquier tipo a booleano, respectivamente. Esto es importante para 
    manejar condicionales, ya que una estructura condicional evalúa si un valor es 
    verdadero o falso en un contexto booleano.

    Qué son los valores falsy
    Un valor falsy es aquel que es falso en un contexto booleano, estos son:
    0, "" (string vacío), false, NaN, undefined o null.
    Coersión explícita
*/

Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

console.log(`Valores Falsos: ${Boolean(0)}, ${Boolean("")}, 
${Boolean(null)}, ${Boolean(undefined)}, ${Boolean(NaN)}, ${Boolean(false)}`);

/*
    Qué son los valores truthy
    Un valor truthy es aquel que es verdadero en un contexto booleano, son todos 
    los valores que no sean falsy, que especificamos en la anterior sección.
*/

Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true

console.log(`Valores Verdaderos: ${Boolean(1)}, ${Boolean("hola")}, 
${Boolean(true)}, ${Boolean([1,2,3])}, ${Boolean(function hola(){})}, ${Boolean({nombre:'Jose', edad:'25'})}`);

/*
    Cabe recalcar que en JavaScript todo valor que no sea falsy es truthy incluyendo 
    las estructuras vacías de array y objetos.
*/

Boolean([]);    //true
Boolean({});    //true