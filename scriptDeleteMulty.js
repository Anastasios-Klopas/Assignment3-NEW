$(document).ready(function () {
    $(".deleteLink").click(function () {
        $(this).parent().parent().fadeOut(); // to kanei fadeout
        var n = "tr"[this];
        $("tr")[n + 1].parent().parent().fadeOut(); // to kanei fadeout
        //$("tr", "tr").parent().parent().fadeOut(); // to kanei fadeout
    });
});
/*
$(document).ready(function () {
    $(".deleteLink1").click(function () {
        $(this).parent().parent().fadeOut(); // to kanei fadeout
        //$("tr", "tr").parent().parent().fadeOut(); // to kanei fadeout
    });
});
*/
