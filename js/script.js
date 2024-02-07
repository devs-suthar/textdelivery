$(function(){
    
    // Banner slideshow
    $('.banner-slideshow>li:gt(0)').hide(); 
    setInterval(function() {
       $('.banner-slideshow > li:first')
         .fadeOut(1000)
         .next()
         .fadeIn(1000)
         .end()
         .appendTo('.banner-slideshow');
     }, 2000); 

    // target to div
    $('nav ul li a[href="#pricing"]').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $("section#pricing").offset().top
      }, 1000);
    });

    // sticky header
    $(window).scroll(function() {    
        var scroll_length = $(window).scrollTop();

        if (scroll_length >= 50) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });  

    // Trust testimonial slider
    $('.testimonial-wrapper').slick({
        centerPadding: '20px',
        slidesToShow: 3,
        arrows: true,
        loop: true,
        adaptiveHeight: false,
        responsive: [
          {
            breakpoint: 1180,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      $('.toggle-bar').click(function(){
        $(this).toggleClass('toggled');
        $(this).prev().toggleClass('opened'); 
      });

});


