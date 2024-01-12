let userInput = parseInt(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(userInput) || userInput <= 1) {
    console.log("Vui lòng nhập một số nguyên dương lớn hơn 1.");
} else {
    console.log("Các số nguyên tố nhỏ hơn " + userInput + " là:");
    for (let i = 2; i < userInput; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
