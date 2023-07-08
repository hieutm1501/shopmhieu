
//----------slide show------------//

var slide = document.getElementById('img');

var len = anh.length;
var index = 0;
function next() {
    if (index == len - 1) {
        index = 0
        img.src = anh[index]

    } else {
        index++;
        img.src = anh[index];
    }
}
function pre() {
    if (index == 0) {
        index = len - 1
        img.src = anh[index]
    }
    else {
        index--;
        img.src = anh[index]
    }
}

//--------- validate---------//
var size = document.getElementById('size');
var color = document.getElementById('color');
var flag = true;
function validate() {
    if (size.value == "0" && color.value == "0") {
        alert('Chọn size và color chưa văn ?');
        document.getElementById('size').style.border = "red 1px solid"
        document.getElementById('color').style.border = "red 1px solid"
        flag = false;
    } else {
        if (size.value == "0") {
            alert('Chọn size chưa văn');
            document.getElementById('size').style.border = "red 1px solid"
            flag = false;
        } else {
            document.getElementById('size').style.border = "none";
            flag = true;
        }
        if (color.value == "0") {
            alert('chọn Color đi văn ')
            flag = false;
        }
        else {
            document.getElementById('color').style.border = "none";
            flag = true;
        }
    }
    if (size.value != "0" && color.value != "0") {
        alert("Thêm Giỏ hàng thành công");
        document.getElementById('size').value = "0";
        document.getElementById('color').value = "0";
        flag = true;
    }

    return flag;
}
