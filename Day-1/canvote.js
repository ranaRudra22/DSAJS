function canVote(age) {
    if (age >= 18) {
        console.log(`${age} - You can vote`);
    } else {
        console.log(`${age} - You cannot vote`);
    }
}

canVote(20);