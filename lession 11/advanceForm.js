$(function(){
	var dem=1;

	$(".next").on("click", function(){
		switch(dem) {
			case 1:
				next1();
				break;
			case 2:
				next2();
				break;
			case 3:
				next3();
				break;
			case 4:
				next4();
				break;
		}
	});
	
	function next1(){
		var check=0;
		var username= $(".name").val();
		var pass= $(".pass").val();
		var repass= $(".repass").val();
		var filter1 = /[0-9]/
		if(username==""){
			$(".nameerr").html("Yêu cầu nhập Username!");
		
		}
		else if(filter1.test(username)){
			$(".nameerr").html("Tên không được có số!")
		}
		else if(username.length<8){
			$(".nameerr").html("Yêu cầu nhập trên 8 ký tự!");
		
		}
		else{
			$(".nameerr").html("");
					check++;
		}

		if(pass==""){
			$(".passerr").html("Yêu cầu nhập Password!");
		}else if(pass.length<8){
			$(".passerr").html("Yêu cầu nhập trên 8 ký tự!");
	
		}else{
			$(".passerr").html("");
			check++;
		}


		if(repass==""){
			$(".repasserr").html("Yêu cầu nhập Password");
		}else if(pass != repass){
			$(".repasserr").html("Password phải trùng với Confirm Password");
		}else{
			$(".repasserr").html("");
			check++;
		}
		if(check == 3){
			dem=2;
			var now= $(".contentactive");
			now.attr("class","content");
			now.next().attr("class","content contentactive");
			var tabactive= $(".tabactive");
			tabactive.attr("class", "tab");
			tabactive.next().attr("class", "tab tabactive");
		}

	}
	function next2(){
		var check=0;
		var fname=$(".fname").val();
		var lname= $(".lname").val();
		var email= $(".email").val();
		var address=$(".address").val();
		var filter1 = /[0-9]/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(fname==""){
			$(".fnameerr").html("Yêu cầu nhập Username");
			}
		else if(filter1.test(fname)){
			$(".fnameerr").html("Tên không được có số!");
		}else{
			$(".fnameerr").html("");
			check++;
		}

		if(lname==""){
			$(".lnameerr").html("Yêu cầu nhập  Last name");
		}
		else if(filter1.test(lname)){
			$(".lnameerr").html("Tên không được có số!");
		}else{
			$(".lnameerr").html("");
			check++;
		}
		if(email==""){
			$(".emailerr").html("Yêu cầu nhập email!");
		}else if(!filter.test(email)){
			$(".emailerr").html("Email phải có dạng abc@gmail.com !")
		}else{
			$(".emailerr").html("");
			check++;
		}

		if(address==""){
			$(".addresserr").html("Yêu cầu nhập address");
		}else{
			$(".addresserr").html("");
			check++;
		}

		var age=$(".age").val();
		if(age==""){
			$(".ageerr").html("Yêu cầu nhập Tuổi");
		}else{
			$(".ageerr").html("");
			if(age<18) {
				dem=3;
			
				var now= $(".contentactive");
				now.attr("class","content");
				now.next().attr("class","content contentactive");
				var tabactive= $(".tabactive");
				tabactive.attr("class", "tab");

				tabactive.next().attr("class", "tab tabactive");
				// $(".next").css("opacity","0.5");
				// $(".previous").css("background","#3e3ed8");	
			}
			else {
				dem=4;

				var now= $(".contentactive");
				now.attr("class","content");
				now.next().next().attr("class","content contentactive");
				var tabactive= $(".tabactive");
				tabactive.attr("class", "tab");
				tabactive.next().next().attr("class", "tab tabactive");
			}
			alert(dem);
			check++;
		}

	}
	function next3(){
		
	}
	function next4(){
		alert('Thành Công');
	}
$(".previous").on("click", function(){
		if(dem==1){
		 	var now= $(".display");
			now.attr("class","content");
			now.attr("class","contentactive");
			var active= $(".active");
			active.attr("class", "tab");
			active.attr("class", "tabactive");
		}else if(dem==2||dem == 3){
			var now= $(".display");
			now.attr("class","content");
			now.prev().attr("class","contentactive");
			var active= $(".active");
			active.attr("class", "tab");
			active.prev().attr("class", "tabactive");
		}if(dem==4){
			var now= $(".display");
			now.attr("class","content");
			now.prev().prev().attr("class","contentactive");
			var active= $(".active");
			active.attr("class", "tab");
			active.prev().prev().attr("class", "tabactive");
			}	
		});
});