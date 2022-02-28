$(function(){
  // banner part
    $('.slider-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        pauseOnHover:false,
      });
      // service part
    $('.ser-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 668,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
        ]
      });
      //  counter part
      $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
    // comment part
    $('.comment-wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover:false,
      arrows:true,
      prevArrow:".c-left-icon ",
      nextArrow:".c-right-icon ",
    });
    // team part
    $('.team-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      arrows:false,
      pauseOnHover:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
          }
        },
      ]
    });
    // navbar part
    $(window).scroll(function(){
      var top = $(this).scrollTop()
      if(top > 200){
        $(".navbar").addClass("sticky-menu")
      }
      else{
        $(".navbar").removeClass("sticky-menu")
      }

      if(top > 200){
        $(".back-to-top").fadeIn(300)
      }
      else{
        $(".back-to-top").fadeOut(300)
      }
    })

    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0},1000)
    })

  //   // work part
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'circle-fade',
      spinColor: '#333333',
      overlayColor:'hsla(47, 95%, 76%, 0.6)',
      navSpeed: 400,
  });
    new VenoBox({
      selector: '.my-video-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'circle-fade',
      spinColor: '#333333',
      overlayColor:'hsla(47, 95%, 76%, 0.6)',
      navSpeed: 400,
  });
 

//scroollink part
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 10
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
  $(".navbar-toggler").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();
  });
 
})
