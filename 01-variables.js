/* 
    La palabra reservada VAR es la utilizada por JavaScript para declarar variables
    esta declaracion de variables se mantienen en el Scope del objeto global. 

    Con las nuevas versiones de JS esto se mejora con las palabras reservadas let y const
    pero es tema para otra seccion.

    Una variable es una reserva de espacio en la memoria.
*/

var nombre;                 //Como se declara una variables
nombre = 'Oscar'            //Como se incializa una variable, se le otorga un valor
this.globalThis(nombre);    //La palabra reservada var guarda en el objeto principal.
console.log(nombre);


var edad = 25;              //Esto es declarar e inicializar la variable.


var amigos;
console.log(amigos);        //Si se utiliza una variable declara sin inicializarla el valor por defecto sera undefined

/* 
    Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

    Var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

    o Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:
    Var pokemonType = ‘electric’ entonces reinicializar es:
    Var pokemonType = ‘grass’ osea la misma variable con diferentes datos el último dato predomina.
    o Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var
    o Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

    const y let es la forma en que se declaran las variables a partir de ECMAScript 6,

    const: sirve para declarar variables que nunca van a ser modificadas:
    o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
    const pokemonType = ‘grass’
    o No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:
    pokemonType = ‘grass’
    o No es inmutable: osea no puede cambiar con objetos:

    Let: Son variables que pueden ser modificadas, se pueden cambiar:
    o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
    let pokemonType = ‘grass’
    o Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
    o Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.
*/

var mascotas = ['Perro', 'Gato', 'Gallina'];        //Podemos declarar variables de tipo array
var persona = {nombre: 'Juan', Apellido: 'Jimenez'} //Podemos declarar variables de tipo objeto
