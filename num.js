function calculateLifePath() {
    const nameInput = document.getElementById('nameInput').value.toLowerCase().replace(/\s/g, '');
    
    if (!/^[a-zA-Z]+$/.test(nameInput)) {
        alert('Please enter a valid name (only letters allowed).');
        return;
    }
    const lifePathNumber = calculateSumOfDigits(getNumberForName(nameInput));

    document.getElementById('result').innerHTML = `Your Life Path Number is: ${lifePathNumber}`; //showing the  result

}

function getNumberForName(name) {
    let sum = 0;

    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
    }

    return sum;
}

function calculateSumOfDigits(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    if (sum > 9) {
        sum = calculateSumOfDigits(sum);
}
    return sum;
}
