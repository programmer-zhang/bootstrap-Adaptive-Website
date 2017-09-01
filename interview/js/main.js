jQuery(document).ready(function () {
    $(".cd-nav-trigger").click(function(){
        $('.navStyle').show();
    })
    $('.menu-icon').click(function () {
        $('.navStyle').hide();
    })

    setInterval(function () {
        var ch = $(".barbtn").offset().top;
        if (ch > 1500){
            $('.barbtn').css('bottom','50px');
        }else{
            $('.barbtn').css('bottom','0px');
        }
    },500);

})




