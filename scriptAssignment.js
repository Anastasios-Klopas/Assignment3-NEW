document.getElementById('myFormAssignment').addEventListener('submit', function (event) {
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var subDateTime = document.getElementById("subDateTime");
    var oralMark = document.getElementById("oralMark");
    var totalMark = document.getElementById("totalMark");
    var emptyMessage = "You must fill all the fields";

    if (title.value === "" || description.value === "" || subDateTime.value === "" || oralMark.value === "" || totalMark.value === "") {
        document.getElementById("emptyInputs").innerHTML = emptyMessage;
        event.preventDefault();
    } else {
        document.getElementById("emptyInputs").innerHTML = "";
        var now = new Date();
        var subDateTimeObject = new Date(subDateTime.value);
        var year = (subDateTimeObject.getFullYear() - now.getFullYear());
        var sameMonth = false;
        if (year === 1) {
            if (subDateTimeObject.getMonth() - now.getMonth() <= 0) {
                sameMonth = true;
            }
        }
        if (year < 0 || (year >= 1 && sameMonth !== true)) {
            var yearError = "Sub Date Time has 1 year period from now";
            document.getElementById("subDateTimeValidation").innerHTML = yearError;
            event.preventDefault();
        } else {
            document.getElementById("subDateTimeValidation").innerHTML = "";
        }
        var pattern = /^[A-Z]/;
        var titleFormat = pattern.test(title.value);
        var descriptionFormat = pattern.test(description.value);

        if (titleFormat !== true || title.value.length > 50/* || title.value.length < 1*/) {
            var message = "The title should start with capital letter and 50 characters MAX";
            document.getElementById("titleValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("titleValidation").innerHTML = "";
        }
        if (descriptionFormat !== true || description.value.length > 50 /*|| description.value.length < 3*/) {
            var message = "The description should start with capital letter and 50 characters MAX";
            document.getElementById("descriptionValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("descriptionValidation").innerHTML = "";
        }
        var patternNumber = /^[0-9]/;
        var oralMarkFormat = patternNumber.test(oralMark.value);
        var totalMarkFormat = patternNumber.test(totalMark.value);
        if (oralMark.value < 0 || oralMark.value > 100 || oralMarkFormat !== true) {
            var message = "Oral mark should contain only positive not decimal numbers and max value 100";
            document.getElementById("oralMarkValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("oralMarkValidation").innerHTML = "";
        }
        var totalMarkFormat = patternNumber.test(totalMark.value);
        if (totalMark.value < 0 || totalMark.value > 100 || totalMarkFormat !== true) {
            var message = "Total mark should contain only positive not decimal numbers and max value 100";
            document.getElementById("totalMarkValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("totalMarkValidation").innerHTML = "";
        }
    }
});