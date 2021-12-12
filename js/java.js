$(document).ready(function(){
    var testH = $(window).height();
    var navH = $('.header-nav,.navbar').innerHeight();
 $('.carousel-item').height(testH);

$('.header .row').height(testH-navH);


})


$(window).scroll(function()
{

    if($(window).scrollTop() >= 620)
    {$(".header-nav").css({background: "red"})}

})


var icon = document.getElementById("lo2");
var pre = document.getElementById("pre2");

icon.onclick = function()
{

pre.style.display = "block";
}

var times = document.getElementById("times");

times.onclick = function(){


pre.style.display = "none";
document.body.style.position = "none";


}




function bt1(){


    location.replace("login.html")
    }