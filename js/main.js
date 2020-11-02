
$(document).ready(function () {
    // Navbar trasistion
    $(window).scroll(function () { 
        if($(this).scrollTop() > 50){
            $(".navbar").addClass("solid");
        } else{
            $(".navbar").removeClass("solid");
        }
    });
});

// ***Isotope**
// initializing Isotope
var $grid = $('.grid').isotope({
    itemSelector:'.grid-item',
    layoutMode:'masonry'
});

$("#nav ul li a[href^='#']").on('click' ,function (e) { 

    // prevents default click behavior
    e.preventDefault();

    let hash =this.hash;
    // animate
    $('html, body').animate({
        scrollTop:$(hash).offset().top
    }, 4000, function(){
        window.location.hash=hash;
    });
});

// $("#nav ul li a[href^='#']").on('click' ,function (e) { 

//     // prevents default click behavior
//     e.preventDefault();

//     let hash =this.hash;
//     // animate
//     $('html, body').animate({
//         scrollTop:$(hash).offset().top
//     }, 3000, function(){
//         window.location.hash=hash;
//     });
// });