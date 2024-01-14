$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})
var owl2 = $('.owl-carousel');
owl2.owlCarousel();
// Go to the next item  
$('.leaderBoardCarousel-prev').click(function () {
    owl2.trigger('prev.owl.carousel');
})
// Go to the previous item
$('.leaderBoardCarousel-next').click(function () {
    owl2.trigger('next.owl.carousel');
});