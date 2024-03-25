// const array2 = [1, 2, 3, 4, 5];
// const array = ["Tesla", "BYD", "Mersadez", "Nexia", "BMW"];

// for (const element of array) {
//     array2.push(element)
// }

// console.log(array, array2);
// console.log(array2);



let array = ["non", "aziz",];
let juft = ["mashina", "gul", "olma"];
for (let i = 0; i<array.length; i++){
    let check = array[i] % 2;
    if(check === 0){
        juft.push(array[i])
    }
}

console.log(array , "palindrom sozli massiv");
console.log(juft , "palindrom bo'lmagan sozli massiv");