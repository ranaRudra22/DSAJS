function largestOfTwo(number1, number2) {
    if (number1 > number2) {
        console.log(`${number1} is the bigger number`);
    } else if (number1 < number2) {
        console.log(`${number2} is the bigger number`);
    } else {
        console.log(`Both numbers are equal`);
    }
}

largestOfTwo(10, 10);