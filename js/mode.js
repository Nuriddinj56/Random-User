const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const modeLocal = localStorage.getItem('mode')

if (modeLocal) {
    body.classList.toggle('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}
const toggleMogeBtn = () => {
    body.classList.toggle('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}

darkBtn.addEventListener('click', () => {
    toggleMogeBtn()
    localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', () => {
    toggleMogeBtn()
    localStorage.setItem('mode', '')
})