document.getElementById("btnFindDay").addEventListener("click", function (e) {
  e.preventDefault();
  var date = parseInt(document.getElementById("inputDate").value);
  var month = parseInt(document.getElementById("inputMonth").value);
  var year = parseInt(document.getElementById("inputYear").value);

  //    var setDay = new Date();
  //    var setMonth = new Date();
  //    var setYear = new Date();
  //    setDay.setDate(date);
  //    setMonth.setMonth(month);
  //    setYear.setYear(year);
  //    alert(setDay + setMonth + setYear);
  if (date != 0 && month != 0 && year != 0) {
    date = date + 1;
    month = month + 1;
    year = year + 1;
    alert(
      "Ngày tiếp theo của ngày vừa nhập: Ngày " +
        date +
        " tháng " +
        month +
        " năm " +
        year
    );
  } else alert("Vui lòng nhập ngày tháng năm");
  if (date != 0 && month != 0 && year != 0) {
    date = date - 2;
    month = month - 2;
    year = year - 2;
    alert(
      "Ngày trước của ngày vừa nhập: Ngày " +
        date +
        " tháng " +
        month +
        " năm " +
        year
    );
  } else alert("Vui lòng nhập ngày tháng năm");
});

document.getElementById("btnFindDay2").addEventListener("click", function (e) {
  e.preventDefault();
  var month2 = parseInt(document.getElementById("inputFindMonth").value);
  var year2 = parseInt(document.getElementById("inputFindYear").value);

  if (!isNaN(month2) || !isNaN(year2)) {
    switch (month2) {
      case 1:
        alert("Tháng " + month2 + " năm "+ year2 +" có 31 ngày");
        break;
      case 2:
        if ((year2 % 4 == 0 && year2 % 100 != 0) || year2 % 400 == 0) {
          alert("Tháng " + month2 + " năm "+ year2 +" có 29 ngày");
        } else {
          alert("Tháng " + month2 + " năm "+ year2 +" có 28 ngày");
        }

        break;
      case 3:
        alert("Tháng " + month2 + " năm " + year2 + " có 31 ngày");
        break;
      case 4:
        alert("Tháng " + month2 + " năm " + year2 + " có 30 ngày");
        break;
      case 5:
        alert("Tháng " + month2 + " năm " + year2 + " có 31 ngày");
        break;
      case 6:
        alert("Tháng " + month2 + " năm " + year2 + " có 30 ngày");
        break;
      case 7:
        alert("Tháng " + month2 + " năm " + year2 + " có 31 ngày");
        break;
      case 8:
        alert("Tháng " + month2 + " năm " + year2 + " có 31 ngày");
        break;
      case 9:
        alert("Tháng " + month2 + " năm " + year2 + " có 30 ngày");
        break;
      case 10:
        alert("Tháng " + month2 + " năm " + year2 + " có 31 ngày");
        break;
      case 11:
        alert("Tháng " + month2 + " năm " + year2 + " có 30 ngày");
        break;
      case 12:
        alert("Tháng " + month2 + " năm " + year2 + " có 31 ngày");
        break;
    }
  } else {
    alert("Vui lòng nhập dữ liệu");
  }
});

document.getElementById("btnNum").addEventListener("click", function (e) {
  var number = parseInt(document.getElementById("inputNum").value);
  if (!isNaN(number)) {
    var num1 = Math.floor(number / 100);
    var num2 = Math.floor((number % 100) / 10);
    var num3 = Math.floor(number % 10);
    // Trăm
    if (num1 == "0") {
      num1 = "Không trăm";
    } else if (num1 == "1") {
      num1 = "Một trăm";
    } else if (num1 == "2") {
      num1 = "Hai trăm";
    } else if (num1 == "3") {
      num1 = "Ba trăm";
    } else if (num1 == "4") {
      num1 = "Bốn trăm";
    } else if (num1 == "5") {
      num1 = "Năm trăm";
    } else if (num1 == "6") {
      num1 = "Sáu trăm";
    } else if (num1 == "7") {
      num1 = "Bảy trăm";
    } else if (num1 == "8") {
      num1 = "Tám trăm";
    } else {
      num1 = "Chín trăm";
    }

    // chục
    if (num2 == "0") {
      num2 = "lẻ";
    } else if (num2 == "1") {
      num2 = "mười";
    } else if (num2 == "2") {
      num2 = "hai mươi";
    } else if (num2 == "3") {
      num2 = "ba mươi";
    } else if (num2 == "4") {
      num2 = "bốn mươi";
    } else if (num2 == "5") {
      num2 = "năm mươi";
    } else if (num2 == "6") {
      num2 = "sáu mươi";
    } else if (num2 == "7") {
      num2 = "bảy mươi";
    } else if (num2 == "8") {
      num2 = "tám mươi";
    } else {
      num2 = "chín mươi";
    }

    //Đơn vị
    if (num3 == "0") {
      num3 = " ";
    } else if (num3 == "1") {
      num3 = "mốt";
    } else if (num1 == "2") {
      num3 = "hai";
    } else if (num3 == "3") {
      num3 = "ba";
    } else if (num3 == "4") {
      num3 = "bốn";
    } else if (num3 == "5") {
      num3 = "lăm";
    } else if (num3 == "6") {
      num3 = "sáu";
    } else if (num3 == "7") {
      num3 = "bảy";
    } else if (num3 == "8") {
      num3 = "tám";
    } else {
      num1 = "chín";
    }
    alert("Cách đọc số " + number + ": " + num1 + " " + num2 + " " + num3);
  } else {
    alert("Nhập số hợp lệ");
  }
});


document.getElementById("btnTinh").addEventListener("click", function (e) {
    e.preventDefault();
    var toaDo1 = parseFloat(document.getElementById("inputLocation1").value);
    var toaDo2 = parseFloat(document.getElementById("inputLocation2").value);
    var toaDo3 = parseFloat(document.getElementById("inputLocation3").value);
    var toaDoTruong = parseFloat(document.getElementById("inputLocationSchool").value);

    var tenSV1 = document.getElementById("inputNameSV1").value;
    var tenSV2 = document.getElementById("inputNameSV2").value;
    var tenSV3 = document.getElementById("inputNameSV3").value;

    var khoangcach1 = Math.abs(toaDo1 - toaDoTruong);
    var khoangcach2 = Math.abs(toaDo2 - toaDoTruong);
    var khoangcach3 = Math.abs(toaDo3 - toaDoTruong);
    

    if(khoangcach1 > khoangcach2 && khoangcach1 > khoangcach3){
        alert("Khoảng cách của " + tenSV1 + " là: " + khoangcach1 + " Xa trường nhất");
    }else if(khoangcach1 > khoangcach2 && khoangcach1 < khoangcach3){
        alert("Khoảng cách của " + tenSV3 + " là: " + khoangcach3 + " Xa trường nhất");
    }else if(khoangcach1 < khoangcach2 && khoangcach1 > khoangcach3){
        alert("Khoảng cách của " + tenSV2 + " là: " + khoangcach2 + " Xa trường nhất");
    }else if(khoangcach2 > khoangcach1 && khoangcach2 > khoangcach3){
        alert("Khoảng cách của " + tenSV2 + " là: " + khoangcach2 + " Xa trường nhất");
    }else if(khoangcach2 > khoangcach1 && khoangcach2 < khoangcach3){
        alert("Khoảng cách của " + tenSV3 + " là: " + khoangcach3 + " Xa trường nhất");
    }else if(khoangcach3 > khoangcach2 && khoangcach3 > khoangcach1){
        alert("Khoảng cách của " + tenSV3 + " là: " + khoangcach3 + " Xa trường nhất");
    }else {
        alert("Khoảng cách của " + tenSV3 + " là: " + khoangcach3 + " Xa trường nhất");
    }
});