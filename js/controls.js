export default function Controls({
    btnPlay,
    btnPause,
    btnLightMode,
    btnDarkMode
}) {

    function play() {
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
    }

    function pause() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    }

    function stop() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    }

    function light() {
        btnLightMode.classList.remove('hide')
        btnDarkMode.classList.add('hide')
        let style = document.querySelector('#style')
        style.setAttribute('href', './style.css')
    }

    function dark() {
        btnLightMode.classList.add('hide')
        btnDarkMode.classList.remove('hide')
        let style = document.querySelector('#style')
        style.setAttribute('href', './style-dark.css')
    }

    return {
        play,
        pause,
        stop,
        light,
        dark
    }
}