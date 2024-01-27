// let nums = [67,52,39];


// let newarray = nums.map((val) => {
//     return val * val;
// })
// console.log(newarray);
// console.log(nums);

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let filternew = numbers.filter((val) => {
//     return val % 2 == 0;
// })

// console.log(filternew);

// let filternew1 = numbers.filter((val) => {
//     return val % 2 != 0;
// })

// console.log(filternew1);


let numbers = [1,2,3,4,5,6,7,8,9,10];

const output = numbers.reduce((result , num) =>{
    return result + num;
});
console.log(output);