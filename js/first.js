$(document).ready(function(){
    var testH = $(window).height();
    var navH = $('.header-nav,.navbar').innerHeight();
 $('.carousel-item').height(testH);

$('.header .row').height(testH);


})



$(window).scroll(function()
{

    if($(window).scrollTop() >= 50)
    {$(".header-nav").css({background: "#0aa291"});

    $(".nav-lists ul li").css({color: "#fff"});
    $(".nav-icon .logo-white").css("display","block");
    $(".nav-icon .logo-green").css("display","none")




}
    else
    {$(".header-nav").css({background: "#fff"});
    $(".nav-lists ul li").css({color: "#666"});
    $(".header-nav .nav-lists ul .signout").css({color: "#fff"});
    $(".nav-icon .logo-white").css("display","none");
    $(".nav-icon .logo-green").css("display","block");



}

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
}


function out()
{


location.replace("login.html");


}




$(".fa-star").click(function(){


$(this).toggleClass("tm")
})



$(document).ready(function(){

    $(".fot").click(function(){


        $("body,html").animate({scrollTop: $("#footer2").offset().top})

    })

    $(".pages").click(function(){


        $("body,html").animate({scrollTop: $("#five").offset().top})

    })


    $(".listing").click(function(){


        $("body,html").animate({scrollTop: $("#one").offset().top})

    })

   

})

/**Start Hover Image One**/
document.querySelectorAll(".photo1")[0].onmouseover = function(){


document.querySelectorAll(".photo1")[0].setAttribute("src","image/partner-hover-2.png");
}

document.querySelectorAll(".photo1")[0].onmouseout = function(){


 document.querySelectorAll(".photo1")[0].setAttribute("src","image/partner-2.png");
}
    
/**End Hover Image One**/


/**Start Hover Image Two**/
document.querySelectorAll(".photo2")[0].onmouseover = function(){


    document.querySelectorAll(".photo2")[0].setAttribute("src","image/partner-hover-3.png");
    }
    
    document.querySelectorAll(".photo2")[0].onmouseout = function(){
    
    
     document.querySelectorAll(".photo2")[0].setAttribute("src","image/partner-3.png");
    }
        
/**End Hover Image Two**/


/**Start Hover Image Four**/
document.querySelectorAll(".photo4")[0].onmouseover = function(){


    document.querySelectorAll(".photo4")[0].setAttribute("src","image/partner-hover-5.png");
    }
    
    document.querySelectorAll(".photo4")[0].onmouseout = function(){
    
    
     document.querySelectorAll(".photo4")[0].setAttribute("src","image/partner-5.png");
    }
        
/**End Hover Image Four**/

/*
var bt11 = document.getElementById("bt1");
var bt12 = document.getElementById("bt2");
var bt13 = document.getElementById("bt3");
var bt14 = document.getElementById("bt4");
var bt15 = document.getElementById("bt5");
var bt16 = document.getElementById("bt6");


bt11.onclick = function()
{
    document.getElementById("header1").style.display= "block";
    
    

}

bt12.onclick = function()
{
document.getElementById("header1").style.display= "none";
document.getElementById("header2").style.display= "block";


}

bt13.onclick = function()
{
document.getElementById("header1").style.display= "none";
document.getElementById("header2").style.display= "none";
document.getElementById("header3").style.display= "block";

}

bt4.onclick = function()
{
    document.getElementById("header1").style.display = "block";
    document.getElementById("header2").style.display = "none";
    document.getElementById("header3").style.display = "none";
    document.getElementById("header4").style.display = "none";
    document.getElementById("header5").style.display = "none";
    document.getElementById("header6").style.display = "none";
    
}
bt5.onclick = function()
{
document.querySelector(".pre-header1").style.display = "none";
document.querySelector(".pre-header2").style.display = "none";
document.querySelector(".pre-header3").style.display = "none";
document.querySelector(".pre-header4").style.display = "none";
document.querySelector(".pre-header5").style.display = "block";
document.querySelector(".pre-header6").style.display = "none";

}

bt6.onclick = function()
{
document.querySelector(".pre-header1").style.display = "none";
document.querySelector(".pre-header2").style.display = "none";
document.querySelector(".pre-header3").style.display = "none";
document.querySelector(".pre-header4").style.display = "none";
document.querySelector(".pre-header5").style.display = "none";
document.querySelector(".pre-header6").style.display = "block";

}
*/

/*Start Pages1*/
document.getElementById("read1").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header11").style.display = "block";
document.getElementById("header12").style.display = "none";
document.getElementById("header13").style.display = "none";
document.getElementById("header14").style.display = "none";

}


document.getElementById("read2").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header11").style.display = "none";
document.getElementById("header12").style.display = "block";
document.getElementById("header13").style.display = "none";
document.getElementById("header14").style.display = "none";
}


document.getElementById("read3").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header11").style.display = "none";
document.getElementById("header12").style.display = "none";
document.getElementById("header13").style.display = "block";
document.getElementById("header14").style.display = "none";

}


document.getElementById("read4").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header11").style.display = "none";
document.getElementById("header12").style.display = "none";
document.getElementById("header13").style.display = "none";
document.getElementById("header14").style.display = "block";

}




/*Start Pages2*/
document.getElementById("bt1").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("Real-types1").style.display = "none";
document.getElementById("header1").style.display = "block";
document.getElementById("header2").style.display = "none";
document.getElementById("header3").style.display = "none";
document.getElementById("header4").style.display = "none";
document.getElementById("header5").style.display = "none";
document.getElementById("header6").style.display = "none";


}



document.getElementById("bt2").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header1").style.display = "none";
document.getElementById("header2").style.display = "block";
document.getElementById("header3").style.display = "none";
document.getElementById("header4").style.display = "none";
document.getElementById("header5").style.display = "none";
document.getElementById("header6").style.display = "none";

}


document.getElementById("bt3").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header1").style.display = "none";
document.getElementById("header2").style.display = "none";
document.getElementById("header3").style.display = "block";
document.getElementById("header4").style.display = "none";
document.getElementById("header5").style.display = "none";
document.getElementById("header6").style.display = "none";

}

document.getElementById("bt4").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header1").style.display = "none";
document.getElementById("header2").style.display = "none";
document.getElementById("header3").style.display = "none";
document.getElementById("header4").style.display = "block";
document.getElementById("header5").style.display = "none";
document.getElementById("header6").style.display = "none";

}

document.getElementById("bt5").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header1").style.display = "none";
document.getElementById("header2").style.display = "none";
document.getElementById("header3").style.display = "none";
document.getElementById("header4").style.display = "none";
document.getElementById("header5").style.display = "block";
document.getElementById("header6").style.display = "none";

}

document.getElementById("bt6").onclick = function(){

document.querySelector(".header-main").style.display = "none";
document.getElementById("header1").style.display = "none";
document.getElementById("header2").style.display = "none";
document.getElementById("header3").style.display = "none";
document.getElementById("header4").style.display = "none";
document.getElementById("header5").style.display = "none";
document.getElementById("header6").style.display = "block";

}

document.querySelectorAll(".home")[0].onclick = function(){

location.replace("first.html")
}


document.getElementById("home").onclick = function(){
document.getElementById("pre2").style.display = "none";
}

document.getElementById("listing").onclick = function(){
document.getElementById("pre2").style.display = "none";
}

document.getElementById("pages").onclick = function(){
document.getElementById("pre2").style.display = "none";
}

document.getElementById("fot1").onclick = function(){
document.getElementById("pre2").style.display = "none";
}