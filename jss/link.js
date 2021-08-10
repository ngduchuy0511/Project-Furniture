$(function () {
    // TweenMax.from($('.wrap-img'),1.5,{x:300,opacity:0,transform:0});
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.menu-header').addClass('doimenu');
            $('.gotop').addClass('hientop');
            $('.logo').addClass('doilogo');
        }
        else {
            $('.menu-header').removeClass('doimenu');
            $('.gotop').removeClass('hientop');
            $('.logo').removeClass('doilogo');
        }
    });
    
});


$('.gotop').click(function (e) { 
    $('html,body').animate({scrollTop:0},1000);
    
});
