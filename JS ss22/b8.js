let isValidInput = false;

while (!isValidInput) {
    let num1 = parseFloat(prompt("Nhập vào số thứ nhất:"));

    let num2 = parseFloat(prompt("Nhập vào số thứ hai:"));

    let operation = prompt("Nhập vào phép tính (+, -, *, /):");
    if (!isNaN(num1) && !isNaN(num2) && (operation === '+' || operation === '-' || operation === '*' || operation === '/')) {
        isValidInput = true;
        let result;

        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    isValidInput = false;
                    console.log("Phép chia cho 0 không hợp lệ.");
                }
                break;
            default:
                isValidInput = false;
                console.log("Phép tính không hợp lệ.");
                break;
        }
        if (isValidInput) {
            console.log("Kết quả của phép tính là: " + result);
        }
    } else {
        console.log("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
    }
}
