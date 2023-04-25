// TIMER
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let timerTimeOut

// Controls
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnIncreaseTimer = document.querySelector('.increase-timer')
const btnDecreaseTimer = document.querySelector('.decrease-timer')

//Sounds
const btnSoundForest = document.querySelector('.forest')
const volumeForest = document.querySelector('.volume-forest')

const btnSoundRain = document.querySelector('.clouds-rain')
const volumeRain = document.querySelector('.volume-rain')

const btnSoundCoffee = document.querySelector('.coffee')
const volumeCoffee = document.querySelector('.volume-coffee')

const btnSoundFirePlace = document.querySelector('.fireplace')
const volumeFirePlace = document.querySelector('.volume-fireplace')

//Mode (Light, dark)
const btnLightMode = document.querySelector('.light')
const btnDarkMode = document.querySelector('.dark')


export {
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    btnPlay,
    btnPause,
    btnStop,
    btnIncreaseTimer,
    btnDecreaseTimer,
    btnSoundForest,
    btnSoundRain,
    btnSoundCoffee,
    btnSoundFirePlace,
    btnLightMode,
    btnDarkMode,
    volumeForest,
    volumeRain,
    volumeCoffee,
    volumeFirePlace
}