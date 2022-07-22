$(function () {
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
        centerPadding: '00px',
        pauseOnHover: false,
        pauseOnFocus: false,
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
        $('.location>div').removeClass('on')
        $('.location>div').eq(idx).addClass('on');
        $('.tapMap>li').removeClass('on');
        $(this).parent().addClass('on');
    });
})