/*
    Existe un problema al momento de construir varios objetos a partir de un código base, 
    los atributos deben cambiar con respecto a la nueva información. 
    Para esto se utiliza una función constructora.

    Una función constructora sirve para crear varios objetos a partir de nueva información, 
    esto es recibido argumentos.

    Cómo generar varios objetos a partir de una función constructora
    Para crear una función constructora, debemos definir los parámetros correspondientes, 
    que serán los atributos del objeto, que cambiarán con la nueva información mediante argumentos. 
    Estos argumentos deben hacer referencia a cada uno del nuevo objeto, esto mediante el objeto contexto this.

    Ten en cuenta que los parámetros de la función son diferentes a los atributos del objeto 😄.

    Utilizamos la palabra reservada this y new para crear objetos, crear un objeto de nuestra plantilla se llama
    instancia de la clase.
*/

function nuevoObjeto(id, nombre, accion) {
    this.id =  id;
    this.nombre = nombre;
    this.accion = accion;
    this.detalle = function(){console.log(`${this.id}, ${this.nombre}`)};
}

var ventiladorObjeto = new nuevoObjeto(13123, 'Ventilador', function(){console.log(`${this.nombre}`)});
console.log(ventiladorObjeto);


function listaCarros(cantidad, arrayId = null, arrayMarcas = null, arrayModelos = null) {
    var lista = [];
    for(cantidad; cantidad === 0; cantidad--)
    {
        lista[i] = new nuevoObjeto(arrayId[i], arrayMarcas[i], arrayModelos[i]);
    }
}