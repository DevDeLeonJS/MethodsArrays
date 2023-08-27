const array = [1, 2, 3, 4, 5, 6];
//reduce
/*Reduce un array, aplicar una serie de operaciones que de forma iterativa se iran acumulando y vamos a tener un unico resultado
basado en las operaciones acumuladas de cada uno de los elementos de nuestro array*/
//Return: Regresa un resultado uncio dependiendo
//Modifica Array Original: No

// reduce  (Ejecuta una funcion reductora);
const res = array.reduce((prevValuem, item) => {
    return prevValuem + item;
}, 1)
console.log(res);


// Logica por detras de un reduce
let result = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    result+=element;    
}
console.log(result);



// ********************Ejemplos de un valor maximo
const mior = array.reduce((preValue, item) => {
    return Math.max(preValue, item);
}, Number.MIN_VALUE);
// console.log(mior);


// **************** Buscar el valor maximo de un array
let max = Number.MIN_VALUE;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    max = Math.max(max, element)
}

// **************** Buscar el valor minimo de un array
let min = Number.MAX_VALUE;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    min = Math.min(min, element);
}

// console.log(min);