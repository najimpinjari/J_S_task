// function divide(a , b){
//     if ( b === 0 ){
//         throw new Error(`division by 0 `);
//     }
//     return a /b ;
// }

// try {
//     divide(10,2)
// }catch (error){
//     document.write(`an error accvaired `error.message );
// }

// function divide(x, y) {
//     if (y === 0) {
//         throw new Error('Division by zero');
//     }
//     return x / y;
// }

// try {
//     divide(10, 2);
// } catch (error) {
//     console.error('An error occurred:', error.message);
// }

try {
    nonExistingfunk();
} catch(e) {
    document.write(`${e.message} <b/>`);
} finally{
    document.write(`this statment will always executed <b/>`);
}

document.write(`js Executed Sucessfully <b/>`);

