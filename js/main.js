$(document).ready(function() {
    // Clone nav PC to SP
    var cloneNav = $('.nav-main ul').clone(true);
    // var navSpClone = $(cloneNav).find('.highlight').remove();
    var navSpClone = $(cloneNav).find('.highlight').removeClass('highlight');
    $('.nav-sp').append(cloneNav);

    setInterval(function () {
        $('.captionSlider').addClass('op1');
    }, 1000);

    var heightBr = $(window).height();
    var headerSp = $('.headerSp').innerHeight();
    $('.section-home01').css("min-height", heightBr - headerSp);


    // fade list note
    var note = $('.note-items');
    var noteIndex = -1;
    function showNextNote() {
       ++noteIndex;
       note.eq(noteIndex % note.length)
           .fadeIn(1000)
           .delay(1000)
           .fadeOut(400, showNextNote);
    }
    showNextNote();

    // Toggle nav mobile
    $('.btnToggle').click(function(event) {
        $(this).toggleClass('active');
        $('.nav-sp').slideToggle();
    });

    // Hover select language
    $('.langNav').hover(function() {
        let nav = $(this).find('li').length;
        $(this).animate({
            'height': 24 * nav + 'px'
        }, 'fast');
    }, function() {
        $(this).animate({
            'height': '24px'
        }, 'fast');
    });
    try {
        // link scroll
        $('a[href^="#"]').click(function() {
            let the_id = $(this).attr("href");
            $('html, body').animate({
                scrollTop: $(the_id).offset().top
            }, 600);
            return false;
        });
        // Slider center
        $('.center-slider').slick({
            centerMode: true,
            centerPadding: '160px',
            slidesToShow: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
        // Click modal
        // $('.video-popup').colorbox({
        //     iframe: true,
        //     innerWidth: 949,
        //     innerHeight: 493,
        //     scalePhotos: true,
        //     maxWidth: '95%',
        //     maxHeight: '95%'
        // });

        // $('.video-popup').colorbox({
        //     rel: 'popout',
        //     maxWidth: '95%',
        //     maxHeight: '95%',
        //     href: function() {
        //         return this.href;
        //     }
        // });
        $('.video-popup, #btn_close').click(function(event) {
            $('.wrapVideo').toggleClass('is_hidden');
        });

        $('.video-popup').colorbox({
            inline: true,
            // width: '80%',
            maxWidth: '95%',
            maxHeight: '95%',
            height: 'auto',
            href: '#inline_content'
        });
    } catch (e) {}

    $("#btn_close").click(function() {
        $("#videoplayer").load();
        parent.$.fn.colorbox.close();
        return false;
    });

    // Hide modal
    $(document).click(function(e) {
        if ($(e.target).is('#cboxOverlay')) {
            $('.wrapVideo').addClass('is_hidden');
            $("#videoplayer").load();
        }
    });

    var widthBr = $(window).width();
    // Fixed header
    if (widthBr <= 768) {
        try {
            var indexBlur = $('.section-home02').offset().top;
            var indexBlur2 = $('.section-home06').offset().top;
            var indexBlur3 = $('.section-home07').offset().top;
            $(window).scroll(function() {
                let s = $(window).scrollTop();
                let opacityVal = (s / indexBlur);
                $('.blurred-img').css('opacity', opacityVal);

                let s2 = $(window).scrollTop();
                let opacityVal2 = (s2 / indexBlur2);
                $('.blurred-img06').css('opacity', opacityVal2);

                let s3 = $(window).scrollTop();
                let opacityVal3 = (s3 / indexBlur3);
                $('.blurred-img07').css('opacity', opacityVal3);
            });
        } catch (e) {}

        // Auto resize height items
        var matchHeight = function() {
            function init() {
                eventListeners();
                matchHeight();
            }

            function eventListeners() {
                $(window).on('resize', function() {
                    matchHeight();
                });
            }

            function matchHeight() {
                var groupName = $('[data-match-height]');
                var groupHeights = [];
                groupName.css('min-height', 'auto');
                groupName.each(function() {
                    groupHeights.push($(this).outerHeight());
                });
                var maxHeight = Math.max.apply(null, groupHeights);
                groupName.css('height', maxHeight);
            };
            return {
                init: init
            };
        }();
        matchHeight.init();
    } else {
        // Blur background
        try {
            $('#section-home02').crossfade({
                threshold: 0.3,
                backgroundPosition: 'center center'
            });
            $('#img-home06').crossfade({
                threshold: 0.3,
                backgroundPosition: 'center center'
            });
            $('#section-home07').crossfade({
                threshold: 0.3,
                backgroundPosition: 'left bottom'
            });
        } catch (e) {}
    }

    // Fade scroll
    $(window).scroll(function() {
        $(".fadeTop").each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 60) {
                $(this).addClass('ef-slide');
            }
        });
    }).trigger("scroll");
});


// colorbox Close

// $(document).ready(function() {
//     $(".close_btn").colorbox({
//         inline: "true"
//     });
// });
