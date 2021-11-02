function scrollUp() {
    const vheight =  $('.test').height();
    $('html, body') .animate ({ 
        scrollTop : ((Math.floor($(window).scrollTop() / vheight) - 1 )* vheight)
    }, 500);
}

function scrollDown() {
    const vheight =  $('.test').height();
    $('html, body') .animate ({ 
        scrollDown : ((Math.floor($(window).scrollDown() / vheight) + 1 )* vheight)
    }, 500);
}

$(function() {
    $('.next_btn').click(function(e){
        let divs = $(this) .parent() .prev() .children();
        let input = divs.find('input:checked');
        if(inputs.lenght < 1) {
            alert("문항이 선택되지 않았습니다. ");
            return false;
        }
        e.preventDefault();
        scrollDown();
    });

    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    });

    $('#form').submit(function(e){
        let radios = $('input[type=radio]:checked');
        if(radios.lenght < 3) {
            alert("문항이 체크되지 않았습니다. ");
            return false;
        }
        return true;
    });

    $('html, body').animate ({
        scrollTop: 0 
    }, 500);
});