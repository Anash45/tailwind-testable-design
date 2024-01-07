$('.dropdown').click(function () {
    let container = $(this).find('.dropdown-container');
    let body = $('body');
    var divOffset = container.offset();
    var divWidth = container.outerWidth();
    var bodyWidth = body.width();
    var bodyOffset = body.offset();
    if (divOffset.left > bodyOffset.left) {
        console.log('The div is going out of the body.');
    } else {
        console.log('The div is within the body.');
    }
    $(container).delay(100).slideToggle();
})

$('#menu').click(function () {
    $('.menu-hide').slideToggle();
})

$('.filled').each(function () {
    let data = Number($(this).attr('data'));
    let percentage = (data/50)*100;
    $(this).css({
        'width': percentage+'%'
    })
})