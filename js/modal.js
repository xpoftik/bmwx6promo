
const modalWindow = document.querySelector('.modal');
//console.log(modalWindow);
const moreButtons = document.querySelectorAll('.more');
//console.log("moreButtons: ", moreButtons);
const modalButton = document.querySelector('.modal__button');
//console.log(modalButton);

const closeModal = () => {
    modalWindow.classList.add('hidden');
    enableScrolling()
} 

const showModal = () => {
    modalWindow.classList.remove('hidden');
    stopScrolling()
}

const stopScrolling = () => {
    document.body.style = 'height: 100%; overflow: hidden;'
}
const enableScrolling = () => {
    document.body.style = ''
}

moreButtons.forEach((btn) => {
    btn.addEventListener('click', showModal)
})

modalWindow.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        closeModal();
    }
})