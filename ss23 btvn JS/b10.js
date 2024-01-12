let userInput = parseInt(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(userInput) || userInput <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    console.log("Tam giác vuông 1:");
    for (let i = 1; i <= userInput; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
    console.log("\nTam giác vuông 2:");
    for (let i = userInput; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
