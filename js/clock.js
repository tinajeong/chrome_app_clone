const clock = document.getElementById("clock");
function getClock() {
    const date = new Date();
    const hours =date.getHours().toString().padStart(2,"0");
    const mins = date.getMinutes().toString().padStart(2,"0");
    const secs = date.getSeconds().toString().padStart(2,"0");
    const time = `${hours}:${mins}:${secs}`;
    clock.innerText =time;

}
getClock();
setInterval(getClock,1000);
