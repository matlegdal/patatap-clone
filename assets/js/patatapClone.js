var idleTimer = null;
var idleState = false;

$("*").on("keydown", function () {
    $("#message").fadeOut(800, function(){
        $("h2").removeClass("pulsing");
    });
});

$("*").bind("keydown", function(){
    clearTimeout(idleTimer);
    idleState = false;
    idleTimer = setTimeout(function(){
        $("#message").fadeIn(3000, function(){
            $("h2").addClass("pulsing");
        });
        idleState = true;
    }, 3000);
})