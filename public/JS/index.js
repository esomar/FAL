var modal1 = document.getElementById('signupForm');
var modal2 = document.getElementById('signinForm');
window.onclick = function (event) {

    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


function firstnameVali() {
    var firstname = document.getElementById('f-name').value;
    if (firstname == "") {
        document.getElementById('f-namespan').style.display = 'block';
        document.getElementById('f-namespan').innerHTML = "Please fill the first name field";

    } else if ((firstname.length <= 2) || (firstname.length > 20)) {
        document.getElementById('f-namespan').style.display = 'block';
        document.getElementById('f-namespan').innerHTML = "First name lenght must be between 2 and 20";
    } else if (!isNaN(firstname)) {
        document.getElementById('f-namespan').style.display = 'block';
        document.getElementById('f-namespan').innerHTML = "only characters are allowed";
    } else {
        document.getElementById('f-namespan').style.display = 'none';
    }
}

function lastnameVali() {
    var lastname = document.getElementById('l-name').value;
    if (lastname == "") {
        document.getElementById('l-namespan').style.display = 'block';
        document.getElementById('l-namespan').innerHTML = "Please fill the last name field";

    } else if ((lastname.length <= 2) || (lastname.length > 20)) {
        document.getElementById('l-namespan').style.display = 'block';
        document.getElementById('l-namespan').innerHTML = "last name lenght must be between 2 and 20";
    } else if (!isNaN(lastname)) {
        document.getElementById('l-namespan').style.display = 'block';
        document.getElementById('l-namespan').innerHTML = "only characters are allowed";
    } else {
        document.getElementById('l-namespan').style.display = 'none';
    }
}

function idVali() {

    var idinput = document.getElementById('InputID').value;
    if (idinput == "") {
        document.getElementById('idspan').style.display = 'block';
        document.getElementById('idspan').innerHTML = "Please enter ID";
    } else {
        document.getElementById('idspan').style.display = 'none';
    }

}

function valiemailfunction(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

function emailVali() {

    var emailinput = document.getElementById('inputEmail').value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailinput == "") {
        document.getElementById('emailspan').style.display = 'block';
        document.getElementById('emailspan').innerHTML = " ** Please fill the email field";

    } else if (valiemailfunction(emailinput) == false) {
        document.getElementById('emailspan').style.display = 'block';
        document.getElementById('emailspan').innerHTML = " invalde Formate";

    } else {
        document.getElementById('emailspan').style.display = 'none';
    }

}

function passvali() {
    var pass1input = document.getElementById('inputPassword').value;
    if (pass1input == "") {
        document.getElementById('passspan1').style.display = 'block';
        document.getElementById('passspan1').innerHTML = "Please fill the password field";

    } else if ((pass1input.length <= 5) || (pass1input.length > 20)) {
        document.getElementById('passspan1').style.display = 'block';
        document.getElementById('passspan1').innerHTML = "Passwords lenght must be between  5 and 20";

    } else {
        document.getElementById('passspan1').style.display = 'none';
    }
}

function passconfirmvali() {
    var pass11input = document.getElementById('inputPassword').value;

    var pass2input = document.getElementById('inputPassword2').value;
    if (pass2input == "") {
        document.getElementById('passspan2').style.display = 'block';
        document.getElementById('passspan2').innerHTML = "Please fill the confirmpassword field";

    } else if (pass11input != pass2input) {
        document.getElementById('passspan2').style.display = 'block';
        document.getElementById('passspan2').innerHTML = "Password does not match the confirm password";


    } else {
        document.getElementById('passspan2').style.display = 'none';

    }

}
