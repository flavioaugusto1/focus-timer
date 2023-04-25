import Timer from "./timer.js"
import { 
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
 } from "./elements.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import Controls from "./controls.js"

const sound = Sound()

const controls = Controls({
    btnPlay,
    btnPause,
    minutesDisplay,
    btnLightMode,
    btnDarkMode,
})

const timer = Timer({
    timerTimeOut,
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.stop,
    musicEnd: sound.musicEnd
})

Events({
    btnPlay,
    btnPause,
    btnStop,
    btnIncreaseTimer,
    btnDecreaseTimer,
    btnSoundForest,
    btnSoundRain,
    btnSoundCoffee,
    btnSoundFirePlace,
    timer,
    sound,
    controls,
    minutesDisplay,
    secondsDisplay,
    btnLightMode,
    btnDarkMode,
    volumeForest,
    volumeRain,
    volumeCoffee,
    volumeFirePlace
})
