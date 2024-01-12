let a = parseInt(prompt("nhap vao so nguyen duong a: "))
let b = parseInt(prompt("nhap vao so nguyen duong b: "))

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("nhap 2 so nguyen duong hop le")
} else{
    console.log("cac so chia het cho " + b + "trong khoang tu 1 den " + a + "la: ")
    for (let i = 1; i <= a; i++) {
        if (i % b === 0){
            console.log(i)
        }
    }
}