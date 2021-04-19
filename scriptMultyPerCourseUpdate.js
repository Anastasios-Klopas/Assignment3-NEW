document.getElementById('myFormMultyPerCourse').addEventListener('submit', function (event) {
    var multy = document.getElementById("multy");
    var course = document.getElementById("course");

    /*if (multy.value.length < 1 || multy.value === "multy4") {
        var message = "You did n't make any changes. You can choose different values from below menu  ";
        document.getElementById("multyValidation").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("multyValidation").innerHTML = "";
    }
    if (course.value === "course4") {
        var message = "You did n't make any changes. You should choose 1 different course from below menu  ";
        document.getElementById("courseValidation").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("courseValidation").innerHTML = "";
    }*/
    if (multy.value === "multy4" && course.value === "course4") {
        var message = "You did n't make any changes";
        document.getElementById("multyValidation").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("multyValidation").innerHTML = "";
    }
    if (course.value === "course0") {
        var message = "You can n't choose Select...";
        document.getElementById("courseValidation1").innerHTML = message
        event.preventDefault();
    } else {
        document.getElementById("courseValidation1").innerHTML = "";
    }
    if (multy.value === "multy0") {
        var message = "You can n't choose Select...";
        document.getElementById("multyValidation1").innerHTML = message
        event.preventDefault();
    } else {
        document.getElementById("multyValidation1").innerHTML = "";
    }

});