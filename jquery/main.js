$(".dark-btn").click(
    function(){
    $(".square").toggleClass("dark");
    $("body").toggleClass("dark");
  }
);

$(".spin-btn").click(
    function(){
        $(".square").toggleClass("spin");
        $("body").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        $(".cher").addClass("reveal");
        $(".reveal-btn").hide();
    }
);

$( function() {
    $( ".draggable" ).draggable();
    containment: ".container",
    snap; true
  } );