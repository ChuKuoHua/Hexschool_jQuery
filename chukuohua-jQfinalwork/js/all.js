$(document).ready(function(){
    $(window).scroll(function(event){
        var scrollVal=$(this).scrollTop();
        if(scrollVal >150){
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        }
    })
    /*dropdown-active */
    $('.dropdown-main').mouseenter(function(event){
        $('.dropdown-main > a').addClass('active');
    })
    $('.dropdown-main').mouseleave(function(event){
        $('.dropdown-main > a').removeClass('active');
    })    
    /*swiper*/
    var mySwiper = new Swiper ('.swiper-container', {
        direction:'horizontal',
        loop:true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed:1000,
        effect:'coverflow',
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        autoplay: {
            disableOnInteraction: false,
            delay: 3000,
        },
    })
    /*lightbox*/
    lightbox.option({
        'fadeDuration':500,
        'wrapAround': true,
    })
    /*attr*/
    $('.send').click(function(event){
        (window).attr(alert('感謝您的送出'));
    })
    /* top animate*/
    $('.top a').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });    
})