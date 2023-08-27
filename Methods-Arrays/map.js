
const array = [1,2,3,4,5,6]

// MAP
/*Return: Retorna un nuevo array, haciendo un operacion en cada iteracion del arreglo con esos elementos,
transoformando ese valor en uno nuevo */
//Modifica Array Original: NO
const newArray = array.map(element => {
    return `<div>${element}</div>`
})


//Logica por detras de un map
let result = [];
for(let i = 0; i < array.length; i++){
    const item = array[i];
    result.push(`<div>${item}</div>`);
}

