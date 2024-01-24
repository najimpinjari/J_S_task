//print all even number 0 to 100

for(let num = 0; num<=100; num++){
    if(num % 2 === 0 ){
        console.log(" ood num = ", num);
    }else 
    {
        console.log("num even = ", num)
    }
}

//num gessing game 

let gemnum = 10;
let usernum = prompt("guess the game number");

while (usernum != gemnum) {
    usernum = prompt("you enter wrong number  guess again  ");

}
console.log("congratulation , you entered the right number :");

initialisation string 

let str = "najimdp";

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);

templet literals 

let specialtypestring =`This is a templeate literal`;
console.log(typeof specialtypestring);

let obj ={
    item :"pen",
    price : 10
}

let output =  `the cost of  ${obj.item} item ,, and ${obj.price} rupes `;
console.log(output);
let str = "najimdpinjari";
str.toUpperCase();
console.log(str);

let str = "najimdp";
console.log(str.slice(1,3));

let str1 = "najim";
let str2 ="pinjari";

let newone = str1 +  " " + str2;
console.log(newone);

let fullName = prompt("please Eneter your full name for Genret username");

let username = "@" + fullName + fullName.length; 
console.log(username);