  //轮播
 	function banner(){
 		var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction:false,
        autoplay : 3000,
        loop:true,
    });
   }
 	banner()
 	
$(function() { 
    $(".flexslider").flexslider({
    	animation:"slide",
    	animationLoop:true,
    	slideshow:true,
    	animationSpeed:2000,
    	touch:true,
    	directionNav:false,
    	minItems:1,
    })
}); 

