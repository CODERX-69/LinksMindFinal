$(".fa-search").click(function () {
    $(".icon").toggleClass("active");
    $("input[type='text']").toggleClass("active");
});
$('.plcCourseCarousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

var owl = $('.plcCourseCarousel');
owl.owlCarousel();
// Go to the next item
$('.plcCourses-prev').click(function () {
    owl.trigger('prev.owl.carousel');
})
// Go to the previous item
$('.plcCourses-next').click(function () {
    owl.trigger('next.owl.carousel');
})

$('.counter').counterUp({
    delay: 10,
    time: 2000
});
$('.counter').addClass('animated fadeInDownBig');