// Slider configuration
var config = {
    speed: 3000,  // Slide transition speed in milliseconds
    auto: true,   // Enable autoplay (true or false)
    arrows: true, // Show arrows (true or false)
    nav: true,    // Show navigation (true or false)
    navStyle: 'default' // Navigation style: 'square', 'rectangle', or 'default'
};

// Slider core
var slides = $('.slide-abt');
var totalSlides = slides.length;
var currentIndex = 0;

// Set the initial slide
function setSlides() {
    var currentSlide = slides.eq(currentIndex);
    slides.hide();
    currentSlide.fadeIn(1500); // Add animation for smooth fade
}
setSlides();

// Autoplay functionality
var autoSlide;
if (config.auto) {
    autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Loop back to the first slide
        }
        setSlides();
        navigation();
    }, config.speed);
}

// Navigation arrows
if (config.arrows) {
    $('.arrow-abt').addClass('active-abt'); // Show the arrows

    $('.prev-abt').click(function() {
        clearInterval(autoSlide); // Stop autoplay when arrow is clicked
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // Loop to the last slide if at the first
        }
        navigation();
        setSlides();
    });

    $('.next-abt').click(function() {
        clearInterval(autoSlide); // Stop autoplay when arrow is clicked
        currentIndex += 1;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Loop back to the first slide if at the last
        }
        navigation();
        setSlides();
    });
}

// Navigation
if (config.nav) {
    // Create navigation dots (based on config.navStyle)
    for (var i = 0; i < slides.length; i++) {
        $('<li/>').attr({'class': 'nav-item-abt', 'id': i}).appendTo('.slide-nav-abt');
    }

    // Set the first navigation item as active
    $('.nav-item-abt').first().addClass('item-active-abt');

    // Set navigation style (dot, square, or rectangle)
    switch(config.navStyle) {
        case 'square':
            $('.nav-item-abt').addClass('square-abt');
            break;
        case 'rectangle':
            $('.nav-item-abt').addClass('rectangle-abt');
            break;
        default:
            $('.nav-item-abt').addClass('dot-abt');
    }

    // Function to update active navigation item
    function navigation() {
        $('.nav-item-abt').removeClass('item-active-abt'); // Remove active class from all items
        $('.nav-item-abt').eq(currentIndex).addClass('item-active-abt'); // Add active class to the current slide
    }

    // Click on navigation dot to go to the respective slide
    $('.nav-item-abt').click(function() {
        clearInterval(autoSlide); // Stop autoplay when a navigation dot is clicked
        var navNumb = $(this).attr('id'); // Get the id (index) of the clicked dot
        currentIndex = parseInt(navNumb); // Set the current slide index based on the clicked dot
        navigation();
        setSlides();
    });
}
