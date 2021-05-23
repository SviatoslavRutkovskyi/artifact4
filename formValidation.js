// JavaScript source code
function checkForm(form) {
    var errors = [];
    var re = /^[\w ]+$/;
    if(form.FirstName.value == "") {
        errors.push("First name is empty!");   
    }else if(!re.test(form.FirstName.value)){
        errors.push("First name has invalid characters");
    }
    if (form.FirstName.value.length > 20) {
        errors.push("First name is too long");
    }

    if (form.LastName.value == "") {
        errors.push("Last name is empty!");
    } else if (!re.test(form.LastName.value)) {
        errors.push("Last name has invalid characters");
    }
    if (form.LastName.value.length > 50) {
        errors.push("Last name is too long");
    }

    var userEmail = form.EMail.value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errors.push("Invalid email");
    }

    var phone = form.Phone.value;
    if (isNaN(phone) || phone.lenght > 15 || phone === null || phone === "") {
        errors.push("Invalid phone number");
    }

    if (form.Username.value == "") {
        errors.push("Username is empty!");
    } else if (form.Username.value.length > 12) {
        errors.push("Username can't be longer than 12 symbols");
    }

    if (form.Password.value == "") {
        errors.push("Password is empty!");
    } else if (form.Password.value.length > 7) {
        errors.push("Password can't be longer than 7 symbols");
    }

    if (form.Address.value == "") {
        errors.push("Address is empty!");
    }
    if (form.City.value == "") {
        errors.push("City is empty!");
    }
    if (form.State.value == "00") {
        errors.push("Please pick a state!");
    }
    if (form.Country.value == "00") {
        errors.push("Please pick a Country!");
    }
    if (form.Country.value === "01") {
        if (form.Zip.value == "") {
            errors.push("Zip is empty!");
        } else if (isNaN(form.Zip.value)) {
            errors.push("Ivalid Zip code");
        }
    }
    if (form.Zip.value.length > 5) {
        errors.push("Zip code can't be longer than 5 symbols")
    }

    if (errors.length > 0) {
        var msg = "Errors: \n\n";
        for (var i = 0; i<errors.length; i++) {
            msg += errors[i] + "\n";
        }
        alert(msg);
        return false;
    }
    return true;
}