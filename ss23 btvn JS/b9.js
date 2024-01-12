let userInput = parseInt(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(userInput) || userInput <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    console.log("Dãy Fibonacci sao cho tổng giá trị nhỏ hơn " + userInput + " là:");
    let firstNumber = 0;
    let secondNumber = 1;
    let sum = 0;
    console.log(firstNumber);
    console.log(secondNumber);
    while (sum + firstNumber + secondNumber < userInput) {
        sum = firstNumber + secondNumber;
        console.log(sum);

        firstNumber = secondNumber;
        secondNumber = sum;
    }
}
