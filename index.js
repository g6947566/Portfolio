


function handleHamburgerClick(){
    $(".toggle").on("click", function(){
        if ($(".item").hasClass("active")){
            $(".item").removeClass("active");
            //setting to $(this) is saying go to .item at "a" and add the "hamburger" icon.
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        }else {
            $(".item").addClass("active");
            //setting to $(this) is saying go to .item at "a" and add the "x" icon.
            $(this).find("a").html("<i class='fas fa-times'></i>");
        
        }
    });
};


//click on the body will start the closeMenu Function
$("body").click( function(e) {
    closeMenu();
    //by setting at .toggle instead of this it won't change all links in nav to Hamburger icon.
    $(".toggle").find("a").html("<i class='fas fa-bars'></i>")
});

//close function for hamburger
function closeMenu(){
    /*This remove the hamburger bar after body is clicked
    $('.toggle').fadeOut(200);*/
    $('.item').removeClass('active');  
  }
 
  
  $(".toggle").click( function(e) {
      e.stopPropagation(); // this stops the event from bubbling up to the body
  });




function appList(){
    handleHamburgerClick();
    console.log('appList works');
    gsap.to(".box", {rotation: 1080, x: 120, duration: 6});


}

$(appList);