var sn;
var n;
var s=0;
var gt=1;
do{
	sn=prompt("Nhập số n dương: ");
	n= parseFloat(sn);
	for (var i = 1; i <=n; i++) {
		gt =gt * i;
		s+= i/gt;
		}
}while(n<=0);
document.write(s);