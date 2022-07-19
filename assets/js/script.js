const btn_form = document.querySelectorAll('.btn_sec_form');
const forms = document.querySelectorAll('.form');

btn_form.forEach((item, index) => {

    item.addEventListener('click', function(){

        forms.forEach((item2) => {
            item2.classList.remove('show');
        });
        btn_form.forEach((item3) => {
            item3.classList.add('opac-low');
        });

        forms[index].classList.add('show');
        item.classList.remove('opac-low');

    });

});


$('.float_col a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
            
    $('html, body').animate({ 
        scrollTop: targetOffset - 100
    }, 500);
});
