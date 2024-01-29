//var globalVariable = 10;  //globally scoped variables
//function myFunction() {
//    var localvariable = 20; // locally scoped varibale
//    document.write(localvariable);
//}

//myFunction(); //  output 20
//document.log(globalVariable); // output 10

var globalVariable = 10; // globally scoped variable
function myFunction() {
    var localVariable = 20; // locally scoped variable
    console.log(localVariable);
}
myFunction(); // Output: 20
console.log(globalVariable); // Output: 10



// let and const examples
{
    let blockScopedLet = 30;
    const blockScopedConst = 40;
    document.write(blockScopedLet); // Output: 30
    document.write(blockScopedConst); // Output: 40
}
//console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
//console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined


//decalaring variables two ways

var x;  //declaring a variabl  //undifaned 
x = 2; // assign a value to variable // y 2 
 
document.write(` the value of x : ${x} <b/>`); //

//we can also diclare or initiate variable like follow

var y = 10;
document.write(y);








