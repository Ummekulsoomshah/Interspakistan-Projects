
$(document).ready(function () {
    console.log("we are using jquery");
    $('.p1').click();//now will hide the element having the claas  p1
    $('.p1').click(function(){
        console.log('you clicked on p');
        $(this).hide();
    });
    $('p').dblclick(function () {
        console.log('you double clicked on p', this);
    });
    $('p').mouseenter(function () {
        console.log('you double clicked on p', this);
    });
    $('p').on({click: function () {
        console.log('thanks welcome', this);},
        mouseleave:function(){
            console.log("good bye");

        }
    });
    $('.wiki').show(1000,function(){
        console.log("hidden");
    });
    // $('#wiki').show();
    // $('#but').click(function(){
    //     $('#wiki').toggle(1000);
    // })
    $('#but2').click(function(){
        $('.wiki').fadeOut(5000);
    });
    $('#but').click(function(){
        $('.wiki').toggle(5000);
    });
    $('#bu1').click(function(){
        $('.wiki').hide(5000);
    });
    $('#bu3').click(function(){
        $('.wiki').fadeIn(5000);
    });
    $('#bu4').click(function(){
        $('.wiki').fadeToggle(5000);
    });
    $('#bu5').click(function(){
        $('.wiki').fadeTo(5000);
    });
});
