
const array = [1,2,3,4,5,6];

// ForEach
//RETURN: No nos devuelve un array nuevo, solo hace un recorrido del propio array y nada mas (un for tradicional)
array.forEach((item, index) => {
    console.log({item, index});
})

//Logica por detras del for Each;
for(let i = 0; i < array.length; i++){
    const item = array[i];
    const index = i;
    console.log({item, index});
}


