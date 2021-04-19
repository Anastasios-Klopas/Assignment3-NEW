document.getElementById('myFormMultyPerCourse').addEventListener('submit', function (event) {
    var multy = document.getElementById("multy");
    var student = document.getElementById("student");
    var course = document.getElementById("course");

    if (student.value === "student4" && multy.value === "multy4" && course.value === "course4") {
        var message = "You did n't make any changes.";
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
    if (student.value === "student0") {
        var message = "You can n't choose Select...";
        document.getElementById("studentValidation1").innerHTML = message
        event.preventDefault();
    } else {
        document.getElementById("studentValidation1").innerHTML = "";
    }

});