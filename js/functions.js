/*-----------------------------------------------------------------------------------



  ____                  _ _ _      _____ _             _ _
 |  _ \                | (_) |    / ____| |           | (_)
 | |_) | __ _ _ __   __| |_| |_  | (___ | |_ _   _  __| |_  ___  ___
 |  _ < / _` | '_ \ / _` | | __|  \___ \| __| | | |/ _` | |/ _ \/ __|
 | |_) | (_| | | | | (_| | | |_   ____) | |_| |_| | (_| | | (_) \__ \
 |____/ \__,_|_| |_|\__,_|_|\__| |_____/ \__|\__,_|\__,_|_|\___/|___/

 version 1.0


-----------------------------------------------------------------------------------*/

/* 
// ------------------------------------------------>
    1.  NAVBAR SCROLL
	2.  FADE IN
	3.  NAVBAR ACTIVE
	4. TEAM ACTIVE
	5. CAROUSEL

*/

/* ------------------  Navbar Scroll ------------------ */
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('test');
        } else {
            $('.navbar').removeClass('test');
        }
    });
});

/* ------------------  Fade In ------------------ */
$(document).ready(function(){

    /* Fades in page on load */
    $('.fade-first').fadeIn(600).removeClass('fade-first');
    $('.fade-second').fadeIn(1000).removeClass('fade-second');
    $('.fade-third').fadeIn(1500).removeClass('fade-third');

    $('.fade-special').fadeIn(1500).removeClass('fade-third').css("display", "flex");
});

/* ------------------  Navbar Active ------------------ */
$(document).ready(function(){
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});
   
/* ------------------  Team Active ------------------ */
$(document).ready(function(){
    $(".teams a").on("click", function(e){
        e.preventDefault();
        $(".teams").find(".active").removeClass("active");
        $(this).parent().addClass("active");

        var team = this.innerHTML;
        $(".team-profiles").find(".active").hide();
        $(".team-profiles").find(".active").removeClass("active");
        $(".team-profiles").find("." + team).addClass("active");
        $(".team-profiles").find("." + team).fadeIn(800);
    });
});

/* ------------------  Carousel ------------------ */
$('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
