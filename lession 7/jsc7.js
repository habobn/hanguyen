function HW1(){
	for (var i = 1; i <= 7; i++) {
		for (var j = 1; j <=i; j++) {
			document.write(" * ")
		}document.write("<br>")
	}
}

function HW2(){
	for (var i = 1; i <= 7; i++) {
		for (var j = 1; j <=7; j++) {
			document.write(" * ")
		}document.write("<br>")
	}
}

function HW3(){
for (var i = 0; i < 7; i++) {
	for (var j = 0; j <7; j++) {
		if (i==0 || i==6 || j==0 || j==6) {
			document.write(" *")
		}else
			document.write("&nbsp&nbsp&nbsp")
	}document.write("<br>")
	}
}
function HW4(){
for (var i = 7; i >= 1; i--) {
	for (var j = i; j >=1; j--) {
		document.write(" * ")
	}document.write("<br>")
}
}