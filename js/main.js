



//   Nav bar , btn-up
let aboutOffset = $('#about').offset().top;

$(window).scroll(function () {

    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 100) {

        $('#header').css("backgroundColor", "rgba(0,0,0,0.8");
        $('#btnUp').fadeIn(500); // btn-up
}
    else
    {
        $('#header').css("backgroundColor", "transparent");
        $('#btnUp').fadeOut(0)//btn-up



    }
})



// btn-up
$("#btnUp").click(function(){
$("html,body").animate({scrollTop:0} , 2000)

})

//====================================================================================
// Scroll Smooth 
$("a[href^='#']").click(function(e){
    let aHref = $(e.target).attr('href'); // #home , #about , #contact
    let sectionOffset = $(aHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset} , 2000)

})

// ==================================================================================
// Loading Screen (Spinner)

$(document).ready(function(){
    // console.log("hello")
    $('#loadind').fadeOut(1000 , function(){
        $("body").css("overflow-y" , "auto")
    })
})
//======================================================================================
// Colors Box

let divWidth = $('.colorsBox').innerWidth(); //color box من اجل  variablr  تعريف 
$(".options").animate({left:`-${divWidth}`}) // عشان اول لما افتح  الموقع يكون مخفى


let item = $('.color-item');
item.eq(0).css("backgroundColor" , "#ffh")
item.eq(1).css("backgroundColor" , "gray")
item.eq(2).css("backgroundColor" , "green")
item.eq(3).css("backgroundColor" , "orange")
item.eq(4).css("backgroundColor" , "tomato")

item.click(function(e){
    let getColor =$ (e.target).css('backgroundColor');
    $('.change').css('color' , getColor   )
})


$('.options i').click(function(){
    

    if($('.options').css('left') == '0px')
    {
        $(".options").animate({left:`-${divWidth}`} , 1000)
    }
    else
    {
        $(".options").animate({left:`0px`} , 1000)

    }

})

// ==============================================================================================
