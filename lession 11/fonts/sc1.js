$(function(){
	$(".plus").click(function(){
		$(this).parent().next().next().css("display","block");
		$(this).css("display","none");
		$(this).siblings().css("display","block");
	});

	$(".minus").click(function(){
		$(this).parent().next().next().hide('3000');
		$(this).css("display","none");
		$(this).siblings().css("display","block");
	});

});
