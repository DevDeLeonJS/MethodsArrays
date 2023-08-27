// const array = [2, 10, 4, 22, 56, 1000, 3, 45, 6 ];

//sort
/* Mas utilizado cuando se quiere organizar un arreglo y se quiere realizar de una 
forma sencilla*/
//Return: Modifica el arreglo originla, ordenandolo segun las condiciones parametradas
//Modifica Array Original: Si


//sort forma 1
array.sort((a, b) => {

    if(a < b)return -1
    
    if(a > b) return 1;
    
    if(a === b) return 0

    // if(a > b)return -1
    
    // if(a < b) return 1;
    
    // if(a === b) return 0
});
console.log(array);


//Logica detras del sort

//--Forma 1(menor - mayor) - Forma burbuja
const array = [2, 10, 22, 4, 55, 675, 3, 1];

for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] > array[j]){
            const item = array[i];
            array[i] = array[j];
            array[j] = item;
        }
    }
}
for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] < array[j]){
            const item = array[i];
            array[i] = array[j];
            array[j] = item;
        }
    }
}

console.log(array);
