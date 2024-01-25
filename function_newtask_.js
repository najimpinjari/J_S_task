function myFunction(){
    document.write("welcome to my home ");
    document.write("we are learning webdev");
}
myFunction();

function sum(x,y){
    s = x + y;
    console.log("before return");
    return s;
}

let val = sum(2,4)
console.log(val);

sum function 

function sum1(a,b){
    return a+b ;   
}

const arrow = (x,y) =>{
    console.log(x+y);
}

function countVowels(str){
   let count = 0;
    for( const char of str){
        if(  char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
        {
            count++;
        }
    }
    console.log(count);
}

let arraysnew =["gorya" , "sham" ,"najim", "veda"];

arraysnew.forEach((val) => {
    console.log(val.toUpperCase());
});