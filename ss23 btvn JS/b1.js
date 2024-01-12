let userInput = prompt("Nhập vào một số nguyên dương:");

let num = parseFloat(userInput);

if (isNaN(num) || num <= 0) {
    console.log("Vui lòng nhập vào một số nguyên dương.");
} else {
    console.log("Các số nguyên dương từ 1 đến " + num + " là:");
    
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}
