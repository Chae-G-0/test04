$(function () {
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    // $(window).on('resize', function(){
    //     $('.gnb').removeClass('on');
    //     $('.smenu').removeAttr('style')
    // })

    $('.mainSlide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $('.room').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '200px',
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    centerMode: false,
                    centerPadding: '100px',
                    vertical: true,
                }
            },
        ]
    })

    $('.arrow i:nth-child(1)').on('click', function () {
        $('.mainRoom .room').slick('slickPrev')
    })

    $('.arrow i:nth-child(2)').on('click', function () {
        $('.mainRoom .room').slick('slickNext')
    })

    $('.tapMap>li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        // $('.location>div').removeClass('on');
        $('.location>div').eq(idx).toggleClass('on').siblings().removeClass('on');
        // $('.tapMap>li').removeClass('on');
        $(this).parent().toggleClass('on').siblings().removeClass('on');
        $('.mapWrap').toggleClass('on');
    });
    $('.mapWrap').on('click', function () {
        $('.location>div').removeClass('on');
        $('.tapMap>li>a').removeClass('on');
        $('.tapMap>li').removeClass('on');
    })

    $(window).on('scroll', function () {
        var sct = $(this).scrollTop()
        var mapTop = $('.mainMap').offset().top
        if (sct > mapTop - 400) {
            $('.tapMap').toggleClass('on');
        }
    })

    if ($(window).width() < 768) {
        $('.facility').removeClass('scrollme');
    }
})