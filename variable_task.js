function outer(a) {
    document.write(`outer() function called <br/>`);

    function inner(b) {
        document.write(`inner() function called <br/>`);
        return a + b;
    }

//    inner();
    return inner;
}

outer();

var result = outer(10)(20);
 //   innner() //not defined 
document.write(`Returned Result : ${result}  <br/> `)

function multiply(a, b, c) {
    return a * b * c;
}

var restul = multiply(2, 2, 2);
document.write(` ${restul} `);

function multi(a) {
    function multi(b) {
        function multi(c) {
            return a * b * c;
        }
        return multi;
    }
    return multi;
}

var result1 = multi(2)(2)(2);
document.write(`var result1 = multi(2)(2)(2); ${result1}`);