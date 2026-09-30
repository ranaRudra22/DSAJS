function divisibleBy5And11(number) {
    if (number % 5 === 0 && number % 11 === 0) {
        console.log(`${number} is divisible by 5 and 11`);
    } else {
        console.log(`${number} is not divisible by 5 and 11`);
    }
}

divisibleBy5And11(55);