
$('.search').click(function (e) { 
    var vtlanchuottim = $('html,body').scrollTop();
    // vtoject=($('.search-button').offset().top)+vtlanchuottim;
    // if (vtoject<=vtlanchuottim) {
    //     $('.sh-header-search-side').addClass('hienlen');
    //     $('.nen').addClass('hiennen');
    // }
    var vtcodinh1=$('.sh-header-search-side')+vtlanchuottim;
    if (vtcodinh=vtlanchuottim) {
        $('.sh-header-search-side').addClass('hienlen');
        $('.nen').addClass('hiennen');
    }

});
$('.sh-header-search-side-close').click(function (e) { 
    $('.sh-header-search-side').removeClass('hienlen');
    $('.nen').removeClass('hiennen');
});
$('.nen').click(function (e) { 
    $('.sh-header-search-side').removeClass('hienlen');
    $('.nen').removeClass('hiennen');
});

//wow.js
$(window).scroll(function () {
    var vtlanchuot = $('html,body').scrollTop();
    var vtabout = $('.s1').offset().top - 500;
    var vtabout1 = $('.choose-nd').offset().top - 700;
    var vtabout2 = $('.img-idea').offset().top - 700;
    var vtabout3 = $('.product').offset().top - 600;
    // console.log(vtlanchuot);
    if (vtlanchuot >= vtabout) {
        $('.s1').addClass('animate__animated animate__slideInDown');
        $('.p-select').addClass('animate__animated animate__zoomIn');
    }
    if (vtlanchuot >= vtabout1) {
        $('.choose-nd').addClass('animate__animated animate__backInDown');
    }
    if (vtlanchuot >= vtabout2) {
        $('.img-idea').addClass('animate__animated animate__rotateInUpLeft');
    }
    if (vtlanchuot >= vtabout3) {
        $('.product').addClass('animate__animated animate__fadeInUp');
    }
    
});
// document.addEventListener('DOMContentLoaded',function(){
//     var codinh=document.querySelector('.search-button')
//     console.log(codinh.offsetTop);
//     var vtlanchuot = $('html,body').scrollTop();
//     vtcodinh=codinh.offsetTop+vtlanchuot;
//     window.addEventListener('scroll',function(){
//         if (window.pageYOffset>vtcodinh) {
//             codinh.classList.add('dunglai');
//         } 
//     })
// },false)
