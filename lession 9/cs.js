var tab = document.getElementsByClassName("tab");
for (var i = 0; i < tab.length; i++) {
	tab[i].addEventListener("click",function(){

	var active = document.getElementsByClassName("active")[0];
	active.className ="section";

	this.parentNode.className = "section active";
	});
}