var btn = document.getElementById('btn');
var slider = document.getElementById('carouselExampleIndicators');
var heads = document.getElementById('heads');
var carousel1 = document.getElementById('carousel-item1');
var carousel2 = document.getElementById('carousel-item2');
var carousel3 = document.getElementById('carousel-item3');
var carousel4 = document.getElementById('carousel-item4');
var img1 = document.getElementById('img1').getAttribute('src');
var img2 = document.getElementById('img2').getAttribute('src');
var img3 = document.getElementById('img3').getAttribute('src');
var img4 = document.getElementById('img4').getAttribute('src');
function slideShow() {
	setTimeout(function() {
		btn.style.display = 'none';
		heads.style.display = 'block';
		slider.style.display = 'block';
		carousel1.setAttribute('style', 'background-image:url('+img1+')');
		carousel2.setAttribute('style', 'background-image:url('+img2+')');
		carousel3.setAttribute('style', 'background-image:url('+img3+')');
		carousel4.setAttribute('style', 'background-image:url('+img4+')');
	}, 5000);
}
$(document).ready(function(){
	if ($(window).width() < 768) {
		$('.carousel-indicators').find('img, p').hide();
		$('.btn-outline-dark').hide();
	}
});