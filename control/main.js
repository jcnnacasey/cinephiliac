$(".luigi-btn").click(
    function(){
  
      // it might be worth using a different class name here rather than "incorrect" to toggle on the body as this may create some conflicts with the other "incorrect" classes that are being toggled for the gif
      $("body").toggleClass("correct");
      document.getElementById("big").style.display = "none";
          
      // here we use the toggleClass instead of addClass to get the toggling action, we can also simplify the two click functions into one
      $(".correct").toggleClass("luigi");
  
    }    
  );

$(".crowe-btn").click(
    function(){
  
      // it might be worth using a different class name here rather than "incorrect" to toggle on the body as this may create some conflicts with the other "incorrect" classes that are being toggled for the gif
      $("body").toggleClass("incorrect");
      document.getElementById("big").style.display = "none";
          
      // here we use the toggleClass instead of addClass to get the toggling action, we can also simplify the two click functions into one
      $(".incorrect").toggleClass("crowe");
  
    }    
  );

$(".porter-btn").click(
    function(){
  
      // it might be worth using a different class name here rather than "incorrect" to toggle on the body as this may create some conflicts with the other "incorrect" classes that are being toggled for the gif
      $("body").toggleClass("incorrect");
      document.getElementById("big").style.display = "none";
          
      // here we use the toggleClass instead of addClass to get the toggling action, we can also simplify the two click functions into one
      $(".incorrect").toggleClass("porter");
  
    }    
  );

$(".box-btn").click(
    function(){
  
      // it might be worth using a different class name here rather than "incorrect" to toggle on the body as this may create some conflicts with the other "incorrect" classes that are being toggled for the gif
      $("body").toggleClass("incorrect");
      document.getElementById("big").style.display = "none";
          
      // here we use the toggleClass instead of addClass to get the toggling action, we can also simplify the two click functions into one
      $(".incorrect").toggleClass("box");
  
    }    
  );

function hideinfo2() {
  document.getElementById("print").style.visibility="visible";
}

function hideinfo1() {
  document.getElementById("strand").style.visibility="visible";
}