let userInput = prompt("nhap vao 1 so nguyen duong")

let num = parseInt(userInput)

if (isNaN(num) || num < 0) {
    console.log("nhap 1 so nguyen duong hop le")
} else {
    let factorial = 1 
    for (let i = 1; i <= num; i++){
        factorial *= i
    }
    console.log("giai thua cua" + num + "la" + factorial)
}