var month = parseInt(prompt("Nhập vào tháng (1-12):"));
var year = parseInt(prompt("Nhập vào năm:"));

if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
    console.log("Ngày hoặc năm không hợp lệ.");
} else {
    var daysInMonth;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? 29 : 28;
            break;
        default:
            console.log("Tháng không hợp lệ.");
            break;
    }

    if (daysInMonth) {
        console.log(`Tháng ${month} năm ${year} có ${daysInMonth} ngày.`);
    }
}
