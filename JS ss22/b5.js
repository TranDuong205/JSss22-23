function solveLinearEquation(a,b) {
    if (a === 0) {
        return b === 0 ? "phuong tirnh co vo so nghiem" : "phuong trinh vo nghiem"
    } else {
        const x = -b/a;
        return `nghiem cua phuong trinh la x =${x}`;
    }
} 

const inputA = prompt("nhap gia tri cua a")
const inputB = prompt("nhap gia tri cua b")

const a = parseFloat(inputA)
const b = parseFloat(inputB)

if (!isNaN(a) && !isNaN(b)) {
    console.log(solveLinearEquation(a,b))
} else {
    console.log("nhap gia tri hop le cho a va b")
}