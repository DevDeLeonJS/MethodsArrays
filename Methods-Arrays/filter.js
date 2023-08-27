const array = [1,2,3,4,5,6];

//Filter
/*Nos permite filtrar en un arreglo elementos basados en un condicion y
el resultado de esa condicon aplicada a esos elementos nos va a regresar
 un nuevo arreglo*/
//Return: Retorna un array nuevo con elementos condicionados por una validacion
//Modifica Array Original: NO
const newArray = array.filter(item => item>2 && item <6);

//Logica por detras de un filter
let result = [];
for(let i = 0; i < array.length; i++){
    const item = array[i];
    if(item >2 && item<6){
        result.push(item);
    }
}

console.log(result)

