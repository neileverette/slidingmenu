
$(document).ready(function(){
	

// This function is for the slide out menu
$(".menu-hover").on({
    'mouseenter': function (e) {
        e.stopPropagation();
                    var $menu = $(".side-menu");
                    $menu.animate({
                     left: parseInt($menu.css('left')) < 1 ?
                     $menu.css('left') == 0 :
                        0})
                   }
});
$('.menu-hover').on({
    'mouseleave': function(){
        var $menu = $(".side-menu");
            $menu.animate({
            left: 300
        })
    }
})
	});