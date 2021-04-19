document.getElementById('myFormMultyPerCourse').addEventListener('submit', function (event) {
    var multy = document.getElementById("multy");
    var student = document.getElementById("student");
    var course = document.getElementById("course");

    if (multy.value.length < 1) {
        var message = "You can choose more than 1 assignment from below menu ";
        document.getElementById("multyValidation").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("multyValidation").innerHTML = "";

    }
    if (course.value.length < 1) {
        var message = "You should choose 1 course from below menu ";
        document.getElementById("courseValidation").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("courseValidation").innerHTML = "";

    }
    if (student.value.length < 1) {
        var message = "You should choose 1 student from below menu  ";
        document.getElementById("studentValidation").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("studentValidation").innerHTML = "";

    }
    if (student.value === "student0") {
        var message = "You can n't choose Select...";
        document.getElementById("studentValidation1").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("studentValidation1").innerHTML = "";

    }
    if (multy.value === "multy0") {
        var message = "You can n't choose Select...";
        document.getElementById("multyValidation1").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("multyValidation1").innerHTML = "";

    }
    if (course.value === "course0") {
        var message = "You can n't choose Select...";
        document.getElementById("courseValidation1").innerHTML = message;
        event.preventDefault();
    } else {
        document.getElementById("courseValidation1").innerHTML = "";
    }

});