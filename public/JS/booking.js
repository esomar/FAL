var check = [false, false, false, false, false, false];

function hello(cell, num) {



    if (check[num++] == true || check[num--] == true || empty(check)) {
        if (check[num] == false) {
            check[num] = true;
            document.getElementById(cell).style.backgroundColor = "yellow";
        }
    } else if (check[num] === true) {
        check[num] = false;
        document.getElementById(cell).style.backgroundColor = "green";
    }

}


function empty(check) {
    for (var i = 0; i < 6; i++) {
        if (check[i] == true) {
            return false;
        }
    }
    return true;
}
