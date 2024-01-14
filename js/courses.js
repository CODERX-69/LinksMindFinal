$('.coursesCarousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})
var owl2 = $('.coursesCarousel');
owl2.owlCarousel();
// Go to the next item  
$('.coursesCarousel-prev').click(function () {
    owl2.trigger('prev.owl.carousel');
})
// Go to the previous item
$('.coursesCarousel-next').click(function () {
    owl2.trigger('next.owl.carousel');
});

const allAccordion = document.getElementById('allAccordion');
const filterBtn = document.getElementById('filterBtn');

filterBtn.addEventListener('click', () => {
    allAccordion.classList.toggle('displayNone')
});

const showLinkBoards = document.getElementById('showLinkBoards');
const boardDisplayNone = document.querySelectorAll('.boardDisplayNone');
showLinkBoards.addEventListener('click', () => {
    boardDisplayNone.forEach(ele => {
        ele.classList.toggle('boardDisplayNone')
    })
})