export default function Sound() {
    const audioForest = new Audio("./assets/sounds/Floresta.wav")
    const audioCoffee = new Audio("./assets/sounds/Cafeteria.wav")
    const audioRain = new Audio("./assets/sounds/Chuva.wav")
    const audioFirePlace = new Audio("./assets/sounds/Lareira.wav")
    
    function loopMusic() {
        audioForest.loop = true
        audioCoffee.loop = true
        audioFirePlace.loop = true
        audioRain.loop = true
    }

    function playForest() {
        audioForest.play()
        audioCoffee.pause()
        audioRain.pause()
        audioFirePlace.pause()

        loopMusic()
    }

    function playCoffee() {
        audioForest.pause()
        audioCoffee.play()
        audioRain.pause()
        audioFirePlace.pause()

        loopMusic()
    }

    function playRain() {
        audioForest.pause()
        audioCoffee.pause()
        audioRain.play()
        audioFirePlace.pause()

        loopMusic()
    }

    function playFirePlace() {
        audioForest.pause()
        audioCoffee.pause()
        audioRain.pause()
        audioFirePlace.play()

        loopMusic()
    }

    function musicEnd() {
        audioForest.pause()
        audioCoffee.pause()
        audioRain.pause()
        audioFirePlace.pause()
    }

    function changeVolume(audio, volume) {
        audio.volume = volume
    }

    return {
        playForest,
        playRain,
        playCoffee,
        playFirePlace,
        musicEnd,
        changeVolume,
        audioForest,
        audioRain,
        audioCoffee,
        audioFirePlace
    }
}