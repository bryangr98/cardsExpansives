const card = document.querySelectorAll('.card')

function quitClass(){
    card.forEach(carta =>{
        carta.classList.remove('active')
    })
}
card.forEach(carta =>{
    carta.addEventListener('click',()=>{
        quitClass()
        carta.classList.add('active')
    })
})
