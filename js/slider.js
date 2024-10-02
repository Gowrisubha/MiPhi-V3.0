$(document).ready(myUniqueSlider);

function myUniqueSlider() {
    var imgNumber, 
        sliderContainerWidth, 
        imgContainer,
        index,
        flag = true,
        speed = 600,
        bullets = true,
        auto = true,
        time = 5000;
        
    construction();
    $(window).resize(construction);
    if (auto) {
        var handle = setInterval(slideRight, time); 
    }

    function construction() {
        index = 1;
        imgNumber = $('.unique-images-container li').length;
        sliderContainerWidth = Math.round($('#unique-slider-wrapper').width());
        imgContainer = sliderContainerWidth * imgNumber;
        $('.unique-images-container').css("width", imgContainer);
        $('.unique-images-container li').css("width", sliderContainerWidth);
        $('.unique-images-container').css("margin-left", 0);
        if (bullets) {
            $('.unique-bullets-container').html("");
            for (i = 1; i <= imgNumber; i++) {
                $('.unique-bullets-container').append("<span class='unique-bullet'></span>");
            }
            $('.unique-bullet').eq(0).addClass('active');
        }
        $(".unique-bullet").click(pagers);
        $('.unique-right-arrow').click(slideRight);
        $('.unique-left-arrow').click(slideLeft);
    }

    function pagers() {
        if (!$(this).hasClass('active')) {
            var bulletIndex = $(".unique-bullets-container span").index(this) + 1;
            index = bulletIndex;
            $(".unique-bullets-container").find(".unique-bullet").removeClass("active").eq(bulletIndex - 1).addClass("active");
            $('.unique-images-container').animate({
                marginLeft: -sliderContainerWidth * (bulletIndex - 1)
            }, speed);
        }
    }

    function slideRight() {
        var imgContainerLeft = parseInt($('.unique-images-container').css('margin-left'));
        if (flag) {
            if (imgContainerLeft == -sliderContainerWidth * (imgNumber - 1)) {
                index = 1;
                $('.unique-images-container').animate({
                    marginLeft: 0
                }, speed, function() {
                    flag = true;
                });
            } else {
                index++;
                $('.unique-images-container').animate({
                    marginLeft: '-=' + sliderContainerWidth
                }, speed, function() {
                    flag = true;
                });
            }
            flag = false;
            $(".unique-bullets-container").find(".unique-bullet").removeClass("active").eq(index - 1).addClass("active");
        }
    }

    function slideLeft() {
        var imgContainerLeft = parseInt($('.unique-images-container').css('margin-left'));
        clearInterval(slideRight, 3000);
        if (flag) {
            if (imgContainerLeft == 0) {
                index = index + (imgNumber - 1);
                $('.unique-images-container').animate({
                    marginLeft: -sliderContainerWidth * (imgNumber - 1) + 'px'
                }, speed, function() {
                    flag = true;
                });
            } else {
                index--;
                $('.unique-images-container').animate({
                    marginLeft: '+=' + sliderContainerWidth
                }, speed, function() {
                    flag = true;
                });
            }
            flag = false;
            $(".unique-bullets-container").find(".unique-bullet").removeClass("active").eq(index - 1).addClass("active");
        }
    }

    $("#unique-slider-wrapper .unique-arrow, .unique-bullets-container").hover(function() {
        clearInterval(handle);
    }, function() {
        handle = setInterval(slideRight, time);
    });
}
