const btn_form = document.querySelectorAll('.btn_sec_form');
const forms = document.querySelectorAll('.form');
const text_form_mobile = document.querySelectorAll('.text_form_mobile p');
const float_social = document.querySelector('.float_social');
const btn_float_social = document.querySelector('.btn_float_social');

btn_form.forEach((item, index) => {

    item.addEventListener('click', function(){

        forms.forEach((item2) => {
            item2.classList.remove('show');
        });
        btn_form.forEach((item3) => {
            item3.classList.add('opac-low');
        });
        text_form_mobile.forEach((item3) => {
            item3.classList.remove('show');
        });

        forms[index].classList.add('show');
        text_form_mobile[index].classList.add('show');
        item.classList.remove('opac-low');

    });

});

btn_float_social.addEventListener('click', function(){
    btn_float_social.classList.toggle('rotate');
    float_social.classList.toggle('float_social_open');
})


$('.float_col a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
            
    $('html, body').animate({ 
        scrollTop: targetOffset - 100
    }, 500);
});


$(document).ready(function(){
    $(".carousel-only-mobile").owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                margin: 20,
                loop: true
            }
        }
    });
    $(".clientes_mobile").owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        fluidSpeed: true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:3,
                margin: 20,
                loop: true
            },
            700:{
                items: 8,
                margin: 10
            }
        }
    });
    $(".carousel_plans").owlCarousel({
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                margin: 20,
            },
            700:{
                items: 2,
                margin: 10
            }
        }
    });
});

$('#inputTel').mask('(00) 00000-0000');

const letreiro = document.querySelector('.letreiro');

setTimeout(function(){

    letreiro.style.animation = "example 30s forwards";

}, 500);