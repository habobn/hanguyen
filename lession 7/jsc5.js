var sn;
var n;
var s=0;
do {
	sn=prompt("Nhập số n dương: ");
	n= parseFloat(sn);
	for (var i = 1; i <=n; i++) {
		s += 1/i;
	}
} while (n<0);
document.write("S = 1 + 1/2 + 1/3 + … + 1/n = "+s);