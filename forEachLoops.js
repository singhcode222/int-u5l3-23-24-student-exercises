let array = [1, 2, 3, 4, 5];
// 1. Use a forEach loop to print each element to the console.

array.forEach(function(num) {
    console.log(num);
});


// 2. Create an array of colors ['red', 'green', 'blue']. 
//  - Use a forEach loop to add "Color:" before each element and print them to the console. 
//  - The output should look like "Color: red", "Color: green", "Color: blue".

let colors = ['red', 'green', 'blue'];

colors.forEach(color => {
    console.log(`Color: ${color}`);
});

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
// 3. Use a forEach loop to calculate and print the sum of all the elements in the array.
//  - There's a couple ways to solve this one - think through the logic and ask for support if you need it :)

numbers.forEach(number => {
    sum += number;
});
console.log(sum);




// 4. Use a forEach loop to print each element to the console.
let fruits = ["apple", "banana", "cherry"]

fruits.forEach(fruit => {
    console.log(fruit);
});
function calculateSum(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}  


let names = ["Simba", "Scar", "Nala", "Mufasa", "Zazu"];

names.forEach((name, index) => {
    console.log(`${name} (Index: ${index})`);
});
// 5. Use a forEach loop to print each name along with its index number.
//  - Remember: the index can be put as a second parameter.
//  - Example: the first message should read something like "Simba (Index: 0)"

