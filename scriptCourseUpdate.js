document.getElementById('myFormCourse').addEventListener('submit', function (event) {
    var title = document.getElementById("title");
    var stream = document.getElementById("stream");
    var type = document.getElementById("type");
    var startDate = document.getElementById("startDate");
    var endDate = document.getElementById("endDate");
    var defaultTitle = title.defaultValue;
    var currentTitle = title.value;
    var defaultStream = stream.defaultValue;
    var currentStream = stream.value;
    var defaultType = type.defaultValue;
    var currentType = type.value;
    var defaultStartDate = startDate.defaultValue;
    var currentStartDate = startDate.value;
    var defaultEndDate = endDate.defaultValue;
    var currentEndDate = endDate.value;
    var fullMessage = "You did n't make any changes";


    if (currentTitle === defaultTitle && currentStream === defaultStream && currentType === defaultType && currentStartDate === defaultStartDate && currentEndDate === defaultEndDate) {
        document.getElementById("fullInputs").innerHTML = fullMessage;
        event.preventDefault();
    } else {
        document.getElementById("fullInputs").innerHTML = "";
        var startDateObject = new Date(startDate.value);
        var endDateObject = new Date(endDate.value);
        var year = (endDateObject.getFullYear() - startDateObject.getFullYear());
        var month = (endDateObject.getMonth() - startDateObject.getMonth());
        var fullError = "Full time has 6 months period";
        var partError = "Part time has 3 months period";
        var yearError = "Bootcamp has 3 or 6 months period";
        if (year == 1) {
            month1 = (12 + endDateObject.getMonth() - startDateObject.getMonth());
            //year = 0;
        }
        switch (year) {
            case 0:
                document.getElementById("mixDateValidation").innerHTML = "";
                switch (month) {
                    case 3:
                        document.getElementById("mixDateValidation").innerHTML = "";
                        switch (type.value) {
                            case "type2":
                                document.getElementById("typePeriodValidation").innerHTML = "";
                                break;
                            case "type0":
                                document.getElementById("typePeriodValidation").innerHTML = "";
                                break;
                            default:
                                document.getElementById("typePeriodValidation").innerHTML = fullError;
                                event.preventDefault();
                                break;
                        }
                        break;
                    case 6:
                        document.getElementById("mixDateValidation").innerHTML = "";
                        switch (type.value) {
                            case "type1":
                                document.getElementById("typePeriodValidation").innerHTML = "";
                                break;
                            case "type0":
                                document.getElementById("typePeriodValidation").innerHTML = "";
                                break;
                            default:
                                document.getElementById("typePeriodValidation").innerHTML = partError;
                                event.preventDefault();
                                break;
                        }
                        break;
                    default:
                        document.getElementById("mixDateValidation").innerHTML = yearError;
                        event.preventDefault();
                        break;

                }
                break;
            case 1:
                document.getElementById("mixDateValidation").innerHTML = "";
                switch (month1) {
                    case 3:
                        document.getElementById("mixDateValidation").innerHTML = "";
                        switch (type.value) {
                            case "type2":
                                document.getElementById("typePeriodValidation").innerHTML = "";
                                break;
                            case "type0":
                                document.getElementById("typePeriodValidation").innerHTML = "";
                                break;
                            default:
                                document.getElementById("typePeriodValidation").innerHTML = fullError;
                                event.preventDefault();
                                break;
                        }
                        break;
                    case 6:
                        document.getElementById("mixDateValidation").innerHTML = "";
                        switch (type.value) {
                            case "type1":
                                document.getElementById("typePeriodValidation").innerHTML = "";
                                break;
                            case "type0":
                                document.getElementById("typePeriodValidation").innerHTML = "";
                                break;
                            default:
                                document.getElementById("typePeriodValidation").innerHTML = partError;
                                event.preventDefault();
                                break;
                        }
                        break;
                    default:
                        document.getElementById("mixDateValidation").innerHTML = yearError;
                        event.preventDefault();
                        break;
                }
                break;
            default:
                document.getElementById("mixDateValidation").innerHTML = yearError;
                event.preventDefault();
                break;
        }


        var patternStream = /^[A-Z]/;
        var patternTitle = /^CB[0-9]/;
        var titleFormat = patternTitle.test(title.value);
        var streamFormat = patternStream.test(stream.value);

        if (titleFormat !== true || /*title.value.length < 3 ||*/ title.value.length > 4) {
            var message = "The title should start with CB and followed by 2 numbers MAX";
            document.getElementById("titleValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("titleValidation").innerHTML = "";
        }
        if (streamFormat !== true ||/* stream.value.length < 1 || */stream.value.length > 50) {
            var message = "The stream should start with capital letter and 50 characters MAX";
            document.getElementById("streamValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("streamValidation").innerHTML = "";
        }
        //var value = type.options[type.selectedIndex].value;
        if (type.value === "type0") {
            var message = "You should choose a type ";
            document.getElementById("typeValidation").innerHTML = message;
            event.preventDefault();
        } else {
            document.getElementById("typeValidation").innerHTML = "";
        }
    }
});