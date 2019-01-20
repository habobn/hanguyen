var sn;
var n;
var s=0;
do{
	sn=prompt("Nhập số n dương: ");
	n= parseFloat(sn);
	for (var i = 0; i <=n; i++) {
		s = s+i;
		}
}while(n<=0);
document.write("1+2+3+...+"+n+"="+s);