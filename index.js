for (i=1; i<101; i++) {
    const result3=i/3
    const result5=i/5
    if (Number.isInteger(result3)&&Number.isInteger(result5)) {
        console.log('FizzBuzz');
    }
    else if (Number.isInteger(result3)) {
        console.log('Fizz');
    }
    else if (Number.isInteger(result5)) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}