var picture=document.getElementsByClassName('picture');
var box= document.getElementsByClassName('box');
var dem=0;
var length= picture.length;
function left(){
	dem--;
	for (var i = picture.length -1; i >= 0; i--) {
		picture[i].className='picture';
		box[i].className='box';
	}
	if(dem<0){
				dem=picture.length-1;
			}
		picture[dem].className='picture active';
		box[dem].className='box action';
}
function right(){
	dem++;
	for (var i = picture.length -1; i >= 0; i--) {
		picture[i].className='picture';
		box[i].className='box';
	}
	if(dem>picture.length-1){
				dem=0;
			}
		picture[dem].className='picture active';
		box[dem].className='box action';
}

function icon(n){
		for (var i = picture.length-1; i >=0; i--) {
			picture[i].className='picture';
			box[i].className='box';
	}
		dem=n;
		picture[dem].className='picture active';
		box[dem].className='box action';
}
window.setInterval(function(){ right(); }, 10000);