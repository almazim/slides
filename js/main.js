function slideShow(){setTimeout(function(){btn.style.display="none",heads.style.display="block",slider.style.display="block",carousel1.setAttribute("style","background-image:url("+img1+")"),carousel2.setAttribute("style","background-image:url("+img2+")"),carousel3.setAttribute("style","background-image:url("+img3+")"),carousel4.setAttribute("style","background-image:url("+img4+")")},5e3)}var btn=document.getElementById("btn"),slider=document.getElementById("carouselExampleIndicators"),heads=document.getElementById("heads"),carousel1=document.getElementById("carousel-item1"),carousel2=document.getElementById("carousel-item2"),carousel3=document.getElementById("carousel-item3"),carousel4=document.getElementById("carousel-item4"),img1=document.getElementById("img1").getAttribute("src"),img2=document.getElementById("img2").getAttribute("src"),img3=document.getElementById("img3").getAttribute("src"),img4=document.getElementById("img4").getAttribute("src");$(document).ready(function(){$(window).width()<768&&($(".carousel-indicators").find("img, p").hide(),$(".btn-outline-dark").hide())});