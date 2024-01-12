let userInput = parseInt(prompt("Nhập vào một số bất kỳ:"));

if (isNaN(userInput) || userInput <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    let sumOfDivisors = 0;
    for (let i = 1; i <= userInput / 2; i++) {
        if (userInput % i === 0) {
            sumOfDivisors += i;
        }
    }
    if (sumOfDivisors === userInput) {
        console.log(userInput + " là số hoàn hảo.");
    } else {
        console.log(userInput + " không phải là số hoàn hảo.");
    }
}
