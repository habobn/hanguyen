var sm;
var m;
var sn;
var n;
var sk;
var k;
var s=0;
do{
    sm=prompt("Nhập số m dương: ");
    m= parseFloat(sm);
    sn=prompt("Nhập số n dương: ");
    n= parseFloat(sn);
    if (m<=n) {
        alert("Bạn phải nhập n<=m")
    }
    
}while(m<=n);
    sk=prompt("Nhập số k trong khoảng (n<=m): ");
    k= parseFloat(sk);
    for (var i = n; i <= m; i++) {
        if (i % k==0) {
            s= s+i;
        }
    }
    document.write(s);