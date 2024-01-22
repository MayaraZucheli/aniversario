
document.addEventListener('DOMContentLoaded', function () {

    const birthday = new Date(2024, 9, 19, 12, 0, 0); 

    function updateCountdown() {
        const now = new Date();
        const difference = birthday - now;
    
        console.log('Now:', now);
        console.log('Birthday:', birthday);
        console.log('Difference:', difference);
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        console.log('Days:', days);
        console.log('Hours:', hours);
        console.log('Minutes:', minutes);
        console.log('Seconds:', seconds);
    
        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);
    }
    

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
});
