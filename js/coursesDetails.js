const seeMoreBtn = document.getElementById('seeMoreBtn');
const showReviews = document.querySelectorAll('.showReviews');
const seeMoreLess = document.querySelectorAll('.seeMoreLess');

seeMoreBtn.addEventListener('click', () => {
    showReviews.forEach(ele => {
        ele.classList.toggle('displayReviewNone')
    })
    seeMoreLess.forEach(elem => {
        elem.classList.toggle('d-none')
    })
})
