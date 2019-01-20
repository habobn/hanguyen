var namer =document.getElementsByClassName('namer')[0];
namer.addEventListener("blur",function(){
	if(namer.value.trim()==''){
		document.getElementsByClassName('Cname')[0].innerHTML="Tên không được để trống";
	}else if(namer.value.length<8){
		document.getElementsByClassName('Cname')[0].innerHTML="Mời bạn nhập trên 8 ký tự";
	}
	else{
		document.getElementsByClassName('Cname')[0].innerHTML="";
	}
});

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email = document.getElementsByClassName('email')[0];
	email.addEventListener("blur", function(){
		if(email.value.trim()==''){
			document.getElementsByClassName('Cemail')[0].innerHTML="Email không được để trống";
		}
		else if(!filter.test(email.value)){
			document.getElementsByClassName('Cemail')[0].innerHTML="Email không hợp lệ abc@gmail.com";
		}
		else{
			document.getElementsByClassName('Cemail')[0].innerHTML="";
		}
	});

var filter1 = /[0-9]/
var sdt = document.getElementsByClassName('phone')[0];

		sdt.addEventListener("blur", function(){
			if(sdt.value.trim()==''){
				document.getElementsByClassName('Cphone')[0].innerHTML="Số điện thoại không được để trống!";
			}
			else if(!filter1.test(sdt.value) ){
				document.getElementsByClassName('Cphone')[0].innerHTML="Số điện thoại phải là số!";
			}
			
			else if(sdt.value.length<10){
				document.getElementsByClassName('Cphone')[0].innerHTML="Số điện thoại phải đủ 10 số !";
			}
			else{
				document.getElementsByClassName('Cphone')[0].innerHTML="";
			}
			
	});

var pass = document.getElementsByClassName('pass')[0];
	pass.addEventListener("blur", function(){
		if(pass.value.trim()==''){
			document.getElementsByClassName('Cpass')[0].innerHTML="Mời bạn nhập mật khẩu";
		}
		else if(pass.value.length<8){
			document.getElementsByClassName('Cpass')[0].innerHTML="mật khẩu phải ít nhất 8 ký tự";
		}
		else{
			document.getElementsByClassName('Cpass')[0].innerHTML="";
		}		
});


var checkpass = document.getElementsByClassName('checkpass')[0];
	checkpass.addEventListener("blur", function(){
		if(checkpass.value.trim()==''){
				document.getElementsByClassName('Ccheck')[0].innerHTML="Mời bạn xác nhận mật khẩu";
			}
			else if(checkpass.value!=pass.value){
				document.getElementsByClassName('Ccheck')[0].innerHTML="Mật khẩu không trùng khớp";
			}
			else if (checkpass.value==pass.value){
				document.getElementsByClassName('Ccheck')[0].innerHTML="";
			}
		});

	