function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var email = document.Form.email.value;
    // var mobile = document.Form.mobile.value;


    var emailErr = true;

    if (email != "") {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (emailErr == true) {
        document.getElementById("submit-btn").disabled = true;
    }
};