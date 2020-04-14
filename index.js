const TWO_MINUTES = 60 * 2;

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const timerScreen = document.getElementById('timer');

const convertSecondsToHumanTime = (timerVal) => {
    let minutes = parseInt(timerVal / 60, 10);
    let seconds = parseInt(timerVal % 60, 10);

    minutes = minutes < 10 ? `0${minutes}`: minutes;
    seconds = seconds < 10 ? `0${seconds}`: seconds;

    return `${minutes}:${seconds}`
}

const state = {
    isRun : false,
    timerId : null,
}

const startTimer = (duration, display) => {
    let timer = duration;
    state.timerId = setInterval(function(){
        if (!state.isRun){
            return;
        }
        display.textContent = convertSecondsToHumanTime(timer);

        if (--timer < 0){
            state.isRun = false;
        }

    }, 1000);
}

const handleStartClick = () => {
    if (state.isRun){
        return;
    }
    state.isRun = true;
    startTimer(TWO_MINUTES, timerScreen);
}

const handleResetClick = () => {
    state.isRun = false;
    clearInterval(state.timerId);
    timerScreen.textContent = convertSecondsToHumanTime(TWO_MINUTES);
}

const handleStopClick = () => {
    state.isRun = false;
    clearInterval(state.timerId);
}

startBtn.addEventListener('click', handleStartClick);
resetBtn.addEventListener('click', handleResetClick);
stopBtn.addEventListener('click', handleStopClick);