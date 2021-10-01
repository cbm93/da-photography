     $('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('textarea + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('textarea + label + span').css({ 'opacity': 0 });
        }
    });
});
$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:first-child input + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('.field:first-child input + label + span').css({ 'opacity': 0 });
        }
    });
});
$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:nth-child(2) input + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('.field:nth-child(2) input + label + span').css({ 'opacity': 0 });
        }
    });
});
      //@ sourceURL=pen.js

  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }

 function showml(divId,inhtmText) 
     {  
        var x = document.getElementById(divId).style.display; 

        if(x=="block")
        {
          document.getElementById(divId).style.display = "none";
          document.getElementById(inhtmText).innerHTML="SHOW MORE...";
        }
       if(x=="none")
       {
          document.getElementById(divId).style.display = "block";
          document.getElementById(inhtmText).innerHTML="SHOW LESS";
        }
     }



//FLEXSLIDER
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
  });
});
$(window).load(function() {
  $(function() {
    var pull = $('#pull');
    var menu = $('nav ul');

    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });
  $(window).resize(function() {
    var menu = $('nav ul');
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});

$("#test").click(function(){alert("OK")});

//OVERLAYS
$(document).ready(function() {
  if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".effects .img").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!$(this).hasClass("hover")) {
        $(this).addClass("hover");
      }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if ($(this).closest(".img").hasClass("hover")) {
        $(this).closest(".img").removeClass("hover");
      }
    });
  } else {
    // handle the mouseenter functionality
    $(".effects .img").mouseenter(function() {
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function() {
      $(this).removeClass("hover");
    });
  }
});


// SMOOTH NAV SCROLL 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});


// WAYPOINTS
$(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

});