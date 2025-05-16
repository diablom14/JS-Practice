function timeDetails()
{
    const now = new Date();
    let timeString = now.toLocaleTimeString();
    let timeSet = document.querySelector(".time-value");
    timeSet.innerText = timeString;
}

setInterval(timeDetails, 1000);


