$('.scheduleAvailabilityCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})
var owl = $('.scheduleAvailabilityCarousel');
owl.owlCarousel();
$('.scheduleAvailability-next').click(function () {
    owl.trigger('next.owl.carousel');
});