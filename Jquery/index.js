// $("h1").addClass("wow-j wow-big-text") for removing classes it is .removeClass("");


// $("button").html("Wow J")

// $("a").attr("href", "https://www.gmail.com")


// $("button").click(function(){
//     $("h1").css("color","Purple");
// });

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });


// $(document).on("mouseover", function(){
//     $("h1").css("color","purple");
// })


$("button").on("click", function() {
    $("h1").fadeToggle();
});