function isPerfectSquare(number) {
    return Math.sqrt(number) % 1 === 0;
}

const inputNumber = prompt("Nhập một số: ");
const number = parseFloat(inputNumber);

if (!isNaN(number) && number > 0) {
    console.log(`${number} ${isPerfectSquare(number) ? 'là' : 'không phải là'} số chính phương.`);
} else {
    console.log("Vui lòng nhập một số dương.");
}
