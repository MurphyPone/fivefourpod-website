/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  

var i = 0;
var list = [ 
             "\"A podcast about how much the supreme court sucks\"", 
             "\"The only legal podcast without a pending Title IX investigation\"", 
             "\"A podcast where we disect and analyze the Supreme Court decisions that have made this country –by a wide margin– the worst country in the world\"", 
             "\"A podcast where we disect and analyze Supreme Court decisions whose collective weight have crushed the American soul, like stones laid atop an accused witch\"", 
             "\"A podcast where we disect and analyze Supreme Court decisions that have washed over American life, like waves over the rocks, reducing once proud boulders to sandy rubble\"", 
             "\"A podcast where we disect and analyze Supreme Court decisions that have weighed down american life, like stones in the pocket of a struggling swimmer, steadily dragging him towards the bottom of the ocean while he struggles towards the surface, water slowly his lungs\"", 
             "\"A podcast where we disect and analyze the Supreme Court cases that have slowly poisoned American life, like toxic runoff into a mountain stream\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have eaten away at this nation, like termites in our floorboards\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have weakened America, like rust slowly eating a steal beam\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have left America cracked and barren, like hot sunlight beaming down on a drought-stricken plane\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have eaten away at the fabric of American society, like moths in our collective closet\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have latched onto American society, like viruses onto a host cell\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that hover over America, like vultures over a dying man in the desert\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have burrowed into America's chest cavity, like that little alien in the 1979 movie Alien\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that undermined America's integrity, like water seeping into our home's foundation\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have eaten away at America, like maggots on a rotting carcass\"",
             "\"A podcast where we disect and analyze the cases that have swarmed American life, like locusts over a grassy plane\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have burned through America, like a dry-season brushfire through a grassland plane\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have clogged up the American spirit, like cholesterol in our collective aorta\"",
             "\"A podcast where we disect and analyze the Supreme Court decicions that have born down on Americans, like unfilitered ultraviolet light on a pale,nude body\"",
             "\"A podcast where we disect and analyze the Supreme Court cases that have leeched America's nutrients, like a tapeworm from its unsuspecting hose\"",
            ]

var txt = list[Math.floor(Math.random() * list.length)]
var sum = 0

function typeWriter() {
  var speed = 30; /* The speed/duration of the effect in milliseconds */
  if (i < txt.length) {
    document.getElementById("blurb").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



