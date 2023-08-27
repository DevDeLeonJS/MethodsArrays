
const array = [1,2,3,4,5,6]

// Every
/*Nos permite hacer un test para cada uno de los elementos para ver si cumplen
un cierta condicion, de ser que un elemento no pase la conicion regresara un false
si todos los elementos cumplen la condicion, entonces regresara un true */
//Return: Boleano (True o False) 
//Modifica Array Original: NO

//Every
const isPassed = array.every(item => item > 0);
console.log(isPassed);


//Logica por detras de every
let passed = true;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element <= 0){
        passed = !passed;
        break;
    }
}   
console.log(passed);