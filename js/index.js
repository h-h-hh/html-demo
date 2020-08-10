window.addEventListener('load', function() {
    var ul = document.querySelector('.menu-img ul')
    let index = 0

    setInterval(() => {
        // ul.style.left = 723 * index
        if (index === 4) {
            ul.style.left = 0 + 'px'
            ul.style.transition = '0s'
            index = 0
        } else {
            ul.style.left = -723 * index + 'px'
            ul.style.transition = 0.3 + 's'
            index++
        }
    }, 1500);






})