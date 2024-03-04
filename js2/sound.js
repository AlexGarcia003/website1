sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'Jennifer']


sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
      
        document.getElementById(sound).play()
    })


    document.getElementById('buttons').appendChild(btn)
})








