const btn = document.querySelector('.btn')

function animation() {
    const elem = document.querySelector('.box')
    let step = 0;

    const move = setInterval(() => {
        step++
        if (step == 300) {
            clearInterval(move)
        } else {
            elem.style.top = step + 'px'
            elem.style.left = step + 'px'
        }
    }, 10)
}

btn.addEventListener('click', animation)