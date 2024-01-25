//splice funcion //change the element with new element
var partners = ["shyam" ,"radhesh", "gotya", "pratham", "vedant"];

partners.splice( 3,4);
console.log(partners);

//indexof //finding element number
var partners = ["shyam" ,"radhesh", "gotya", "pratham", "vedant"];

let pat1 = partners.indexOf("gotya");
console.log(pat1);

lastindex // method returen the last index at given element can be found in the array 

const rolln = [2,3,4,5,6,7,8,9,2,5,6,7,];

const newroll = rolln.lastIndexOf(2);
console.log(newroll);

reverce // method reverce the element of an array in place 
var partners = ["shyam" ,"radhesh", "gotya", "pratham", "vedant"];

partners.reverse();

console.log(partners);

sort // sort the all undifained element in array 
const rolln = [2,3,4,5,6,7,8,9,2,5,6,7,];

const newrooll = rolln.sort();

console.log(newrooll);

for findig odd number 
const numnew = [1,2,3,4,5,6,7,8,9,10];

const newnum = numnew.filter(( n ) => n % 2 != 0 );

console.log(newnum);
//for finding even number 
const numnew = [1,2,3,4,5,6,7,8,9,10];

const newnum = numnew.filter(( n ) => n % 2 !== 0 );

console.log(newnum);

map // method create a new array depence of provoiding function on every element of an array 

const numnew = [1,2,3,4,5,6,7,8,9,10];

const squear = numnew.map((sq) => sq*sq);

console.log(squear);




