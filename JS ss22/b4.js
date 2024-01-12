function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const inputYear = prompt("Nhập một năm: ");
const year = parseInt(inputYear);

if (!isNaN(year)) {
    console.log(`${year} ${isLeapYear(year) ? 'là' : 'không phải là'} năm nhuận.`);
} else {
    console.log("Vui lòng nhập một năm hợp lệ.");
}
