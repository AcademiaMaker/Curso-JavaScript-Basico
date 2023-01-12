/*
    La **estructura switch es otra manera de evaluar condiciones, la diferencia con 
    if es que las condiciones deben ser iguales a un caso o algo específico.

    Cómo utilizar el condicional switch
    Colocamos la palabra reservada switch y seguido de la variable o expresión a evaluar, 
    pero sin ningún operador de comparación.
*/

switch (validacion) {
    case true:
        console.log('Verdad')
        break;

    default:
        console.log('Falso')
        break;
}

/*
    Cuándo utilizar switch
    Deberías utilizar switch cuando tengas una gran cantidad de casos, que con el condicional 
    if produciría más cantidad de código. El problema con switch es que no es muy utilizado y 
    todo se resuelve con if. Sin embargo, conocer esta estructura te puede permitir escribir código 
    más legible en ciertos casos.


*/