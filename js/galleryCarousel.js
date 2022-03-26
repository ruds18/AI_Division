$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        }
    }
})