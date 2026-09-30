function checkDigits(number) {
    number = Math.abs(number);

    if (number >= 0 && number <= 9) {
        console.log(`${number} is a one-digit number`);
    } else if (number >= 10 && number <= 99) {
        console.log(`${number} is a two-digit number`);
    } else if (number >= 100 && number <= 999) {
        console.log(`${number} is a three-digit number`);
    } else {
        console.log(`${number} is more than three digits`);
    }
}

checkDigits(125);