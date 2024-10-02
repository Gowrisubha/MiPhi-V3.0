(function ($) {

  "use strict";

  var countdownTimer = function() {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    $('#countdown-clock').each(function(){
      const deadline = new Date(Date.parse(new Date()) + 28 * 24 * 60 * 60 * 1000);
      initializeClock('countdown-clock', deadline);
    });
  }

  var initScrollSpy = function() {
    
    /** Scroll Spy */
    const links = document.querySelectorAll(".scrollspy-link a");
    const sections = document.querySelectorAll(".scrollspy-section");
    const indicator = document.querySelector(".scrollspy-indicator");

    /*
    links.forEach((link) => {
      link.onclick = () => {
        sections.forEach((section) => {
          if (link.dataset.target === section.id) {
            document.documentElement.scrollTop = section.offsetTop;
          }
        });
      };
    });
    */

    window.onscroll = () => scrollspy();
    window.onload = () => scrollspy();
    window.onresize = () => scrollspy();

    const scrollspy = () => {
      const pageYPosition = document.documentElement.scrollTop || document.body.scrollTop;
      sections.forEach((section) => {
        const sectionYPosition = section.offsetTop;

        if (pageYPosition > sectionYPosition - 20) { // - 160 - 150
          links.forEach((link) => {
            // console.log(link.dataset.target + '===' + section.id);
            if (link.dataset.target === section.id) {
              indicator.style.left = `${link.closest('.scrollspy-link').offsetLeft}px`;
              indicator.style.width = `${link.closest('.scrollspy-link').offsetWidth}px`;
            }
          });
        }
      });
    };

    scrollspy();
  }

  var initSlider = function () {

    $('.swiper').each(function(){

      var swiper = new Swiper(".review-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freemode: true,
        pagination: {
          el: "#testimonials .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
  
      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: "#our-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
  
      
      var swiper = new Swiper(".product-slideshow", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".product-slideshow .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      });

    });

  };

  var initScrollNav = function () {
    var scroll = $(window).scrollTop();
    var textColor = $('.site-header').data("text-color");
    
    if (scroll >= 200) {
      $('.site-header.position-fixed').addClass("bg-white").removeClass("text-white").addClass("text-dark");
    } else {
      $('.site-header.position-fixed').removeClass("bg-white").removeClass("text-dark").addClass("text-"+textColor);
    }
  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  $(window).scroll(function () {
    initScrollNav();
  });

// timeline section

/* Check the location of each element */
$('.unique-content').each(function(i) {
	var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	var bottom_of_window = $(window).height();

	if (bottom_of_object > bottom_of_window) {
		$(this).addClass('hidden-unique');
	}
});

$(window).scroll(function() {
	/* Check the location of each element hidden */
	$('.hidden-unique').each(function(i) {
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		/* If the object is completely visible in the window, fadeIn it */
		if (bottom_of_window > bottom_of_object) {
			$(this).animate({ opacity: '1' }, 700);
		}
	});
});




  $(document).ready(function () {

    $(".youtube").colorbox({
      iframe: true,
      innerWidth: 960,
      innerHeight: 585
    });
    
    // document ready
    $(document).ready(function () {
      initScrollNav();
      initScrollSpy();
      initSlider();
      countdownTimer();
      initJarallax();

      AOS.init({
        duration: 1200,
        once: true,
      })
    }); // document ready

  }); // End of a document

 

})(jQuery);




//contact form


//disable right click


  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

  function showDetails(id) {
    var details = document.getElementById(id);
    details.classList.toggle('active');
  }
  
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function searchFunction() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultsDiv = document.getElementById('author_name');
  resultsDiv.innerHTML = '';  // Clear previous results

  const allTextElements = document.querySelectorAll('body *'); // Target all elements in body

  allTextElements.forEach(element => {
      if (element.innerText && element.innerText.toLowerCase().includes(input)) {
          // Highlight the search results and add them to the results section
          resultsDiv.innerHTML += `<p>${element.innerText}</p>`;
      }
  });
}
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

window.addEventListener('scroll', function() {
  var progressBar = document.querySelector('#section-1 .content-slider nav .controls');

  // Check the scroll position, if the user has scrolled down
  if (window.scrollY > 400) {
    progressBar.style.display = 'none';  // Hide the progress bar
  } else {
    progressBar.style.display = 'block'; // Show the progress bar when scrolled back to top
  }
});

function redirectOnBigScreensAbout(event) {
  // Check if the screen width is 1024px or greater
  if (window.innerWidth > 1024) {
    // Proceed with the navigation to enterprise.html
    window.location.href = 'about.html';
  } else {
    // Stop propagation to prevent navigation on small screens
    event.stopPropagation();
  }
}

function redirectOnBigScreensEnterprise(event) {
  // Get the window width
  var screenWidth = window.innerWidth;

  // Check if the screen width is greater than or equal to 1024px
  if (screenWidth >1024) {
    // Allow redirect for large screens
    window.location.href = 'enterprise.html';
  } else {
    // Prevent redirect for smaller screens
    event.preventDefault();
  }
}
function redirectOnBigScreens(event) {
  // Check if the screen width is 1024px or greater
  if (window.innerWidth > 1024) {
    // Proceed with the navigation to enterprise.html
    window.location.href = 'product.html';
  } else {
    // Stop propagation to prevent navigation on small screens
    event.stopPropagation();
  }
}