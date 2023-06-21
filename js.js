
$(document).ready(function () {
    $(".sidebarBtn").on("click", function () {
        $("#navigation").slideToggle();
        $(".sidebarBtn").toggleClass("toggle");
    });
});
