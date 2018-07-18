const readline = require('readline-sync');

console.log('How many numbers would you like to print?');
const response=readline.prompt();
const responsePlusOne=+response+1;

function isDivisible(numerator,denominator) {
    const divided=numerator/denominator;
    const result=Number.isInteger(divided);
    return result;
}

for (let i=1; i<responsePlusOne; i++) {

    let toPrint=[];

    const ans3=isDivisible(i,3);
    const ans5=isDivisible(i,5);
    const ans7=isDivisible(i,7);
    const ans11=isDivisible(i,11);
    const ans13=isDivisible(i,13);
    const ans17=isDivisible(i,17);
        if (ans11) {
            toPrint.push('Bong');
            if (ans13) {
                toPrint.unshift('Fezz');
            }
        } else {
                if (ans3) {
                    toPrint.push('Fizz');
                }
                if (ans13) {
                    toPrint.push('Fezz');
                }
                if (ans5) {
                    toPrint.push('Buzz');
                }
                if (ans7) {
                    toPrint.push('Bang');
                }

        }
        if (ans17) {
            toPrint.reverse();
        }
        
    if (toPrint[0]) {
        console.log(toPrint);
    } else {
        console.log(i);
    }
}
