$( document ).ready(function() {
    $('.about__wrap').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        dotsData: true,
        mouseDrag: false,
        touchDrag: false,
        dotsClass: 'scroll__list',
        dotClass: 'scroll__item',        
        items: 1
    });

    $('.service__wrap').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        navText:[],
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        items: 1
    });

    $('.publications__wrap').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        dotsData: true,
        mouseDrag: false,
        touchDrag: false,
        dotsClass: 'scroll__list',
        dotClass: 'scroll__item',        
        items: 1
    });

    $('.publication__wrap').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        dotsData: true,
        mouseDrag: false,
        touchDrag: false,
        dotsClass: 'scroll__list',
        dotClass: 'scroll__item',        
        items: 1
    });

    $('.news__wrap').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        dotsData: true,
        mouseDrag: false,
        touchDrag: false,
        dotsClass: 'scroll__list',
        dotClass: 'scroll__item',        
        items: 1
    });

    // $(".carousel__item--disable-swipe").on("mousedown", function(e) {
    //     e.stopPropagation();
    // });

    // function onInitialize (event) { if (event.item.count <= 4) { this.options.mouseDrag = false; this.options.touchDrag = false; } else { this.options.mouseDrag = true; this.options.touchDrag = true; } }
});





