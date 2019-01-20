$(function(){
	$(".plus").click(function(){
		$(this).parent().next().children().css("display","block");
		$(this).css("display","none");
		$(this).next().css("display","none");
		$(this).prev().css("display","block");
		$(this).next().next().css("display","block");
	});

	$(".tru").click(function(){
		$(this).css("display","none");
		$(this).next().css("display","block");
		$(this).parent().next().children().css("display","none");
		$(this).next().next().css("display","block")
		$(this).next().next().next().css("display","none")
	});

});
