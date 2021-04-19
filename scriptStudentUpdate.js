document.getElementById('myFormStudent').addEventListener('submit', function (event) {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var dateOfBirth = document.getElementById("dateOfBirth");
    var tuitionFee = document.getElementById("tuitionFee");
    var sameMessage = "You did n't make any changes";
    //var emptyMessage = "You must fill all the fields";
    //var emptyFirstName = "You should fill the empty field****"
    var defaultFirstName = firstName.defaultValue;
    var currentFirstName = firstName.value;
    var defaultLastName = lastName.defaultValue;
    var currentLastName = lastName.value;
    var defaultDateOfBirth = dateOfBirth.defaultValue;
    var currentDateOfBirth = dateOfBirth.value;
    var defaultTuitionFee = tuitionFee.defaultValue;
    var currentTuitionFee = tuitionFee.value;


    if (defaultFirstName === currentFirstName && defaultLastName === currentLastName && defaultDateOfBirth === currentDateOfBirth && defaultTuitionFee === currentTuitionFee) {

        document.getElementById("fullInputs").innerHTML = sameMessage;
        event.preventDefault();
    } else {
        document.getElementById("fullInputs").innerHTML = "";
        var now = new Date();
        var dateOfBirthObject = new Date(dateOfBirth.value);
        var age = (now.getFullYear() - dateOfBirthObject.getFullYear());
        var sameMonth = false;
        if (age === 18) {
            if (dateOfBirthObject.getMonth() - now.getMonth() <= 0) {
                sameMonth = true;
            }
        }
        if ((age <= 18 && sameMonth !== true) || age > 100) {
            var ageError = "The age should be over 18 and a logical age";
            document.getElementById("dateOfBirthValidation").innerHTML = ageError;
            event.preventDefault();
        } else {
            document.getElementById("dateOfBirthValidation").innerHTML = "";
        }

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

        var patternNumber = /^[0-9]/;
        var tuitionFeeFormat = patternNumber.test(tuitionFee.value);
        if (tuitionFee.value < 0 || tuitionFee.value > 2500 || tuitionFeeFormat !== true) {
            var message = "Tuition Fee should contain only positive not decimal numbers and max value 2500";
            document.getElementById("tuitionFeeValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("tuitionFeeValidation").innerHTML = "";
        }
    }
});