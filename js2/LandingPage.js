toggle = document.getElementById('toggle')
open = document.getElementtListenerById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

//togal nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

//show modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

//hide modal
close.addEventListener('click', () => {
    modal.classList.remove('show-model')
})

//hide modal on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show')
    }
})
