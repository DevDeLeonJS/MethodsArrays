const array = [
    {id: 0, name:'Restaurante 1', rating: 3.5},
    {id: 1, name:'Restaurante 2',},
    {id: 2, name:'Restaurante 3', rating: 3.5}
];

//some
/*Si queremos hacer pruebas con lo elementos de nuestro arreglo pero queremos saber
si solo alguno de ellos cumple alguna condicional, funciona igual que every, solo 
que en este caso con que solo un elemento cumpla con la condicion regresara true,
"some" seria como un OR y "every" seria como un AND */
//Return: Booleano (True o False) 
//Modifica Array Original: No


//Some
const completed = array.some(item => item.rating === undefined);
console.log(completed);



//Logica por detras de un Some
let test = false;
for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if(item.rating === undefined){
        test = true;
        break;
    }
}

console.log(test);


/*Cual es la diferencia entre "some()" y "includes()"" 
    includes() te va a buscar por un elemento completo, no permite permite crear un metodo callback
    para poder especificar nuestra propia condicional para buscar dentro de nuestro arreglo, 
    includes va a buscar por todos el elemento como tal mientras que some va a buscar basado
    en una condicional
*/