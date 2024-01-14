const choices = document.querySelectorAll('.choices');
choices.forEach(element => {
    element.addEventListener('click', () => {
        event.target.classList.toggle('selectedChoices')
    })
});

const clearBtn = document.getElementById('clearBtn');
const clearBtn2 = document.getElementById('clearBtn2');
clearBtn.addEventListener('click', () => {

    choices.forEach(element => {

        element.classList.remove('selectedChoices')

    });
})
clearBtn2.addEventListener('click', () => {
    choices.forEach(element => {
        element.classList.remove('selectedChoices')
    });
})