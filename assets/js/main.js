(function ($) {
  "use strict";

     /* ==== 01. Responsive Menu Js ==== */

	$(".info-toggle-btn").on("click", function () {

		$(".info__area").addClass("info-opened");

		$(".body-overlay").addClass("opened");

	});

	$(".info-close-btn").on("click", function () {

		$(".info__area").removeClass("info-opened");

		$(".body-overlay").removeClass("opened");

	});

	$(".body-overlay").on("click", function () {

		$(".info__area").removeClass("info-opened");

		$(".body-overlay").removeClass("opened");

	});

 /* ==== 02. Header Search Js ==== */

 $('.header-search').on('click', function() {
  $('.header-search, .header-search-form').toggleClass('search-open');
  return false;
});

/* ==== 03. Mobile Menu Js ==== */

$('#mobile-menu-active').metisMenu();

$('#mobile-menu-active .submenu > a').on('click', function (e) {

  e.preventDefault();

})

/* ==== 04. Counter Js ==== */
  
  $('.counter1').counterUp({
    delay: 150,
    time: 1000
  });

  /* ==== 04. Accordion Js ==== */

  const items = document.querySelectorAll(".accordion-item h2");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));
  
  $(".card-header").click(function(){
    if($(this).next(".card-body").hasClass("active")){
      $(this).next(".card-body").removeClass("active").slideUp()
     $(this).children("i").removeClass("fa-minus").addClass("fa-plus")	
    }
  else{
  $(".card .card-body").removeClass("active").slideUp()
  $(".card .card-header i").removeClass("fa-minus").addClass("fa-plus");
    $(this).next(".card-body").addClass("active").slideDown()
     $(this).children("i").removeClass("fa-plus").addClass("fa-minus")
   }
 });

/* ==== 05. Brand Js ==== */
 
  $('.brand-silder-active').owlCarousel({

    loop:true,

    margin:30,

    autoplay:false,

    autoplayTimeout:3000,

    smartSpeed:500,

    items:6,

    navText:['<button><i class="flaticon-left-arrow"></i></button>','<button><i class="flaticon-right-arrow-1"></i></button>'],

    nav:true,

    dots:false,

    responsive:{

      0:{

        items:1

      },

      767:{

        items:4

      },

      992:{

        items:3

      },

      1200:{

        items:6

      },

      1460:{

        items:6

      }

    }

  });

/* ==== 06. Testimonials Js ==== */


  $('.testimonials-slider-active').owlCarousel({

    loop:true,

    margin:30,

    autoplay:false,

    autoplayTimeout:3000,

    smartSpeed:500,

    items:2,

    navText:['<button><i class="flaticon-left-arrow"></i></button>','<button><i class="flaticon-right-arrow-1"></i></button>'],

    nav:true,

    dots:false,

    responsive:{

      0:{

        items:1

      },

      767:{

        items:1

      },

      992:{

        items:1

      },

      1200:{

        items:2

      },

      1460:{

        items:2

      }

    }

  });

 /* ==== 07. scroll Top Js ==== */
  
	 $(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			$('.scroll-top').fadeIn(200);
		} else {
			$('.scroll-top').fadeOut(200);
		}
	});
	$('.scroll-top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

  /* ==== 08. preloader Js ==== */

	setTimeout(function(){
		$('.preloader-bg').fadeToggle();
	}, 1500);

  
  })(jQuery);