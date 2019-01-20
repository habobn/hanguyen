// function send(){
	// var thong_bao; // ="Zent Group";
	// thong_bao="Zent Group";
	// alert(confirm(thong_bao));
	// 
// 	var thong_bao ="Bạn có thích Zent Group không?";
// 	var kq= confirm(thong_bao);
// 	if (kq==true) {
// 		alert("Có");
// 	}else alert("Không");
//

	 // var thong_bao ="Bạn tên gì?";
	 // var kq= prompt(thong_bao);
	 // alert("Xin chào "+kq);

	//  var thong_bao ="Nhập vào 1 số";
	//  var kq= prompt(thong_bao);
	//  var so= parseFloat(kq);//parseInt
	//  // alert(1+so);
	//  document.writeln("<b style='color:greenyellow'>"+(1+so)+"</b><br>");
	//  for (var i = 0; i <= 5; i++) {
	//  	 document.writeln("<b style='color:greenyellow'>"+(1+so)+"</b><br>");
	//  }

	// function tong_2_so(a,b){
	// 	return a+b;
	// }
	// function tong_2_so(a,b){
	// 	document.writeln(a+b);
	// }
	// var a=[1 , 2 ,3 ]
	// a[0]=1;
	// a[1]=2;
	// a[2]=3;
	// var b = new Array (5);
var sn;
var n;
do{
	sn=prompt("Nhập số n dương: ");
	n= parseFloat(sn);
}
while(n<=0);
var smang = new Array(n);
var mang = new Array (n);
for (var i = 0;i <mang.length; i++)
	 {
	smang[i] = prompt("Nhập số thứ "+(i+1))
	mang[i] = parseFloat(smang[i]);
	}
	function tinh_tong(mang){
	var tong=0;
	for (var i = 0; i < mang.length; i++) {
		tong = tong + mang[i];
	}
	return tong;
}
	document.writeln("Tổng là: "+tinh_tong(mang));
