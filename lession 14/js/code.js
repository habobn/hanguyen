
$(function(){
	$(document).ready(function() {
		$('.table-counter').counterUp({
			delay: 10,
			time: 10000
		});
	});

	$('.icon-videos').click(function(){
		$(this).parent().parent().css('display','none');
		$(this).parent().parent().next().children().css('display','block')
	});
	

	$('.img-fmain').hover(function(){
		$(this).css('display','none');
		$(this).next().css("display","inline");
		$(this).next().next().css('color','white');
	},function(){
		$(this).css('display','inline');
		$(this).next().css("display","none");
		$(this).next().next().css('color','black');
	});


		new WOW().init();
		$(function() {
	        var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
	        $('.color-container-1').filterizr({ controlsSelector: '.color-controls-1' });
	        $('.color-container-2').filterizr({ controlsSelector: '.color-controls-2', layout: 'packed' });
	        $('.color-container-3').filterizr({ controlsSelector: '.color-controls-3', layout: 'sameHeight' });
	        // $('.color-container-4').filterizr({ controlsSelector: '.color-controls-4', layout: 'packed' });
	        // $('.color-container-5').filterizr({ controlsSelector: '.color-controls-5', layout: 'horizontal' });
	        // $('.color-container-6').filterizr({ controlsSelector: '.color-controls-6', layout: 'vertical' });
	        window.filterizr = f;
	    });
		document.getElementById('backtotop').style.display = 'none';
	 	window.addEventListener('scroll', function(){
	 		if (window.scrollY > 300) {
	 			document.getElementById('backtotop').style.display = 'block';
	 		}
	 		else
	 			document.getElementById('backtotop').style.display = 'none';

	 	})
	
});