export default function Events({
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
    btnLightMode,
    btnDarkMode,
    volumeForest,
    volumeRain,
    volumeCoffee,
    volumeFirePlace
}) {

    // TIMER CONTROLS
    btnPlay.addEventListener('click', function () {
        controls.play()
        timer.countdown()
    })

    btnPause.addEventListener('click', function () {
        controls.pause()
        timer.pause()
    })

    btnStop.addEventListener('click', function () {
        controls.stop()
        timer.resetTimer()
    })

    btnIncreaseTimer.addEventListener('click', function () {
        timer.increaseTimer()
    })

    btnDecreaseTimer.addEventListener('click', function () {
        timer.decreaseTimer()
    })


    // SOUNDS CONTROLS
    btnSoundForest.addEventListener('click', function () {
        sound.playForest()
        volumeForest.addEventListener('input', function() {
            let valueVolume = volumeForest.value / 10
            const audioForest = sound.audioForest
            sound.changeVolume(audioForest, valueVolume)
        })
    })

    btnSoundRain.addEventListener('click', function () {
        sound.playRain()
        volumeRain.addEventListener('input', function() {
            let valueVolume = volumeRain.value / 10
            const audioRain = sound.audioRain
            sound.changeVolume(audioRain, valueVolume)
        })
    })

    btnSoundCoffee.addEventListener('click', function () {
        sound.playCoffee()
        volumeCoffee.addEventListener('input', function() {
            let valueVolume = volumeCoffee.value / 10
            const audioCoffee = sound.audioCoffee
            sound.changeVolume(audioCoffee, valueVolume)
        })
    })

    btnSoundFirePlace.addEventListener('click', function () {
        sound.playFirePlace()
        volumeFirePlace.addEventListener('input', function() {
            let valueVolume = volumeFirePlace.value / 10
            const audioFirePlace = sound.audioFirePlace
            sound.changeVolume(audioFirePlace, valueVolume)
        })
    })


    //SET MODES
    btnLightMode.addEventListener('click', function() {
        controls.dark()
    })

    btnDarkMode.addEventListener('click', function() {
        controls.light()
    })

}