for (i=1; i<101; i++) {

    const result3=i/3;
    const result5=i/5;
    const result7=i/7;
    const result11=i/11;
    const result13=i/13;
    const result17=i/17;

    var toPrint='';
    
    if (Number.isInteger(result3)) {
        toPrint+='Fizz';
    }
    if (Number.isInteger(result5)) {
        toPrint+='Buzz';
    }
    if (Number.isInteger(result7)) {
        toPrint+='Bang';
    }

    if (toPrint=='') {
        console.log(i);
    }
    else {
        console.log(toPrint);
    }
}


