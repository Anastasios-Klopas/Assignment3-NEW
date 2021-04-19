document.getElementById('myFormTrainer').addEventListener('submit', function (event) {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var subject = document.getElementById("subject");
    var emptyMessage = "You must fill all the fields";

    if (firstName.value === "" || lastName.value === "" || subject.value === "") {

        document.getElementById("emptyInputs").innerHTML = emptyMessage;
        event.preventDefault();
    } else {
        document.getElementById("emptyInputs").innerHTML = "";
        var pattern = /^[A-Z]+[A-Za-z]+$/;
        var firstNameFormat = pattern.test(firstName.value);
        var lastNameFormat = pattern.test(lastName.value);

        if (firstNameFormat !== true || firstName.value.length < 3 || firstName.value.length > 50) {
            var message = "The name should start with capital letter, contain only letters MIN 3 and MAX 50";
            document.getElementById("firstNameValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("firstNameValidation").innerHTML = "";
        }
        if (lastNameFormat !== true || lastName.value.length < 3 || lastName.value.length > 50) {
            var message = "The name should start with capital letter, contain only letters MIN 3 and MAX 50";
            document.getElementById("lastNameValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("lastNameValidation").innerHTML = "";
        }
        var patternSubject = /^[A-Z]/;
        var subjectFormat = patternSubject.test(subject.value);
        if (subjectFormat !== true || subject.value.length > 50) {
            var message = "The subject should start with capital letter and 50 characters MAX";
            document.getElementById("subjectValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("subjectValidation").innerHTML = "";
        }

    }
});