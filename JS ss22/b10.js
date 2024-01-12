
//Khái niệm "truthy" và "falsy" là cách mô tả cách mà giá trị được đánh giá trong ngữ cảnh boolean (true/false) trong JavaScript. Trong ngữ cảnh này, mọi giá trị đều có thể được chia thành hai loại chính: truthy và falsy.

//Các giá trị được xem là "falsy" khi chúng đánh giá là false trong ngữ cảnh boolean. Dưới đây là một số giá trị falsy phổ biến:

//false: Giá trị boolean false.
//0: Số nguyên 0.
//'' hoặc "": Chuỗi rỗng.
//null: Giá trị null.
//undefined: Giá trị undefined.
//NaN: Giá trị Not-a-Number.
//Ngược lại, các giá trị khác được coi là "truthy". Điều này bao gồm mọi giá trị không phải là falsy.

var userInput = prompt("Nhập một giá trị:");

if (userInput) {
    console.log("Giá trị đã nhập là truthy.");
} else {
    console.log("Giá trị đã nhập là falsy hoặc rỗng.");
}
