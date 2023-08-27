const array = [
    { name: 'Jazmin', age: 20},
    { name: 'Brenda', age: 10},
    { name: 'Armando', age: 20}
];

//Find
/*Nos permite encontrar la primra coincidencia de nuestro arreglo basado en una condicion , y a diferencia de filter, es que find
solo nos regresar la primera coincidencia que encuentre en el arreglo, que a diferencia de filter, nos regresa todas las coincidencias
que encuentra en el array*/
//Return: Retorna el primer elemento que cumpla con la condicion
//Modifica Array Original: NO
const item = array.find(item => item.age <= 10);
console.log(item);


//Logica del find
let result = {};
for(let index = 0; index < array.length; index++){
    const item = array[index];
    if(item.age <= 10){
        result = item;
        break;
    }
}