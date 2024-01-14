const options = document.querySelectorAll('.options');
const optionNumber = document.querySelectorAll('.optionNumber')
options.forEach(element => {
    element.addEventListener('click', () => {
        options.forEach(ele => {
            ele.classList.remove('selected');
        })
        event.target.classList.add('selected')
    })
});