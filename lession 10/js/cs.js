// $(document).ready(function(){
// }); viết đầy đủ
$(function(){
	// $("p").css("color","red");
	// $("body #text").css("border","1px solid black");
	// $(".red").css("text-align","center");
	// $(".red").css("font-size","20px");

	$("input").click(function(){

	// 	$(".red").width("50%");
	// 	$(".red").height("50px");
	// 	$(".red").css("color","green");//thay đổi css
	// 	$(".red").html("Thắng đẹp trai");//thay đổi nội dung HTML
	// 	$("input").attr("value","test");//thay đổi thuộc tính
	// 	$("input").attr("class","red");
	// 	$("input").addClass("blue");
	// 	$("input").removeClass("red");
	// 	$(this).attr("value","jquery");
	// });
	// $(window).resize(function(){
	// 		alert("test<br/>");

	 	$("#menu").children().eq(1).next().css("color","red");
	});
});