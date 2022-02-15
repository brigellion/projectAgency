export const timer = (deadline, container) => {

    const field = document.querySelector(`#${container}`);
    const text = document.querySelector('.countdown-text');
    const timerDays = field.querySelector('.count_1 > span');
    const timerHours = field.querySelector('.count_2 > span');
    const timerMinutes = field.querySelector('.count_3 > span');
    const timerSeconds = field.querySelector('.count_4 > span');


    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        return { timeRemaining, days, hours, minutes, seconds };
    };

    const getZero = (num) => {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    };

    function updateClock() {
        let getTime = getTimeRemaining();
        let interval = setInterval(updateClock, 500);
        if (getTime.seconds >= 0) {
            timerDays.textContent = getTime.days;
            timerHours.textContent = getZero(getTime.hours);
            timerMinutes.textContent = getZero(getTime.minutes);
            timerSeconds.textContent = getZero(getTime.seconds);
            if (getTime.timeRemaining <= 0) {
                clearInterval(interval);
            }
        } else {
            text.innerHTML = `Акция закончилась!
            <div class="count-wrap">
                <div class="count count_1">Дней:</br> <span>00</span></div>
                <div class="count count_2">Часов:</br> <span>00</span></div>
                <div class="count count_3">Минут:</br> <span>00</span></div>
                <div class="count count_4">Секунд:</br> <span>00</span></div>
            </div>`;
            clearInterval(interval);
            /*timerDays.textContent = '0';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';*/
        }
    };
    updateClock();

};