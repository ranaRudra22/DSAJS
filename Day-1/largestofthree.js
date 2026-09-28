function largestofthree(number1, number2, number3){
    if(number1 >= number2 && number1 > number3){
        console.log(`${number1} is big number`);
    }else if(number2 >= number3){
        console.log(`${number2} is big number`);
    }else if(number3 > number1 && number3 > number2){
        console.log(`${number3} is big number`);
    }else{console.log(`all are equal`);}

}

largestofthree(20, 15, 15);