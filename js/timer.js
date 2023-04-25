export default function Timer({
    timerTimeOut,
    minutesDisplay,
    secondsDisplay,
    resetControls,
    musicEnd
}) {

    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    let initialMinutes = Number(minutesDisplay.textContent)
    let initialSeconds = Number(secondsDisplay.textContent)

    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart('2', 0)
        secondsDisplay.textContent = String(seconds).padStart('2', 0)
    }

    function pause() {
        clearTimeout(timerTimeOut)
    }
    
    function increaseTimer() {
        if (minutes > 55) {
            minutes = 60
            return
        }

        minutes += 5
        initialMinutes = minutes
        updateTimerDisplay(Number(initialMinutes), seconds)
    }
    
    function decreaseTimer() {
        if (minutes < 5) {
            minutes = 5
            return
        }
        
        minutes -= 5
        initialMinutes = minutes
        updateTimerDisplay(Number(initialMinutes), seconds)
    }
    
    function countdown() {
        minutes = Number(minutesDisplay.textContent)
        seconds = Number(secondsDisplay.textContent)
        
        timerTimeOut = setTimeout(function () {
            
            if (minutes <= 0 && seconds <= 0) {
                resetTimer()
                resetControls()
                musicEnd()
                return
            }
            
            if (seconds == 0) {
                seconds = 60
                --minutes
            }
            
            updateTimerDisplay(minutes, String(seconds - 1))
            countdown()
            
        }, 1000)
    }

    function resetTimer() {
        updateTimerDisplay(initialMinutes, initialSeconds)
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        updateTimerDisplay,
        resetTimer,
        pause,
        increaseTimer,
        decreaseTimer
    }
}