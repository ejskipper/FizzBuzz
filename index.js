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

    let toPrint='';

    const ans3=isDivisible(i,3);
    const ans5=isDivisible(i,5);
    const ans7=isDivisible(i,7);
    const ans11=isDivisible(i,11);
    const ans13=isDivisible(i,13);
    const ans17=isDivisible(i,17);
    
    
    if (ans17) {
        if (ans11) {
            toPrint+='Bong';
            if (ans13) {
                toPrint+='Fezz';
            }
        } else {
            if (ans7) {
                toPrint+='Bang';
            }
            if (ans5) {
                toPrint+='Buzz';
            }
            if (ans13) {
                toPrint+='Fezz';
            }
            if (ans3) {
                toPrint+='Fizz';
            }
        }
    } else {
        if (ans11) {
            toPrint+='Bong';
            if (ans13) {
                toPrint='Fezz'+toPrint;
            }
        } else {
                if (ans3) {
                    toPrint+='Fizz';
                }
                if (ans13) {
                    toPrint+='Fezz';
                }
                if (ans5) {
                    toPrint+='Buzz';
                }
                if (ans7) {
                    toPrint+='Bang';
                }

        }
        
    }
    if (toPrint) {
        console.log(toPrint);
    } else {
        console.log(i);
    }
}
