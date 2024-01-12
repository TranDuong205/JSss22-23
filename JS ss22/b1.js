let a = prompt ("nhap vao so a")
let b = prompt ("nhap vao so b")

if (a % b === 0){
    console.log("a chia het cho b")
} else if (b % a === 0){
    console.log("b chia het cho a")
} else {
    console.log("khong co so nao chia het cho nhau")
}