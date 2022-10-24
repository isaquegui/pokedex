$('.pikachu').click(function () {
    let voice = new Audio('./voice/pikachu.mp3')
    voice.play();
})

$('.flip-card').click(function () {
    this.classList.toggle('show-back')
    if (this.classList.contains('show-back')) {
        setTimeout(() => {
            this.classList.remove('show-back')
        }, 5000)
    }
})