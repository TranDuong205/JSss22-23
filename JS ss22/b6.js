function printDigits(number) {
    if (!isNaN(number) && number >= 1000 && number <= 9999) {
        console.log(`Chữ số hàng nghìn: ${Math.floor(number / 1000)}`);
        console.log(`Chữ số trăm: ${Math.floor((number % 1000) / 100)}`);
        console.log(`Chữ số chục: ${Math.floor((number % 100) / 10)}`);
        console.log(`Chữ số đơn vị: ${number % 10}`);
    } else {
        console.log("Vui lòng nhập số có đúng 4 chữ số.");
    }
}

const inputNumber = prompt("Nhập vào một số có 4 chữ số:");
const number = parseInt(inputNumber);

printDigits(number);
