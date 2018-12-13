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
function valiemailfunction(email){
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}
function emailVali() {

    var emailinput = document.getElementById('inputEmail').value;
    var emailinput2=document.getElementById('inputEmail');
var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (emailinput == "") {
        document.getElementById('emailspan').style.display = 'block';
        document.getElementById('emailspan').innerHTML = " ** Please fill the email field";

    } else if (valiemailfunction(inputEmail)) {
        document.getElementById('emailspan').style.display = 'block';
        document.getElementById('emailspan').innerHTML = " invalde Formate";


    } else {
        document.getElementById('emailspan').style.display = 'none';
    }

}
