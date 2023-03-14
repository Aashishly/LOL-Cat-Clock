let wakeUpTimeSelector =  document.getElementById("wakeUpTime");
let lunchTimeSelector =  document.getElementById("lunchTime");
let napTimeSelector =  document.getElementById("napTime");
let partyButton = document.getElementById("partyTimeButton");
let timeEventJS = document.getElementById("timeEvent");
let lolcatImageJS = document.getElementById('lolcatImage');
let wakeupTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let evening = 18;
let partyTime = 20;


const showCurrentTime = () => {

    let clock = document.getElementById("clock");

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    if(hours >= noon) meridian = "PM";
    if(hours > noon) hours -= 12;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;


    clock.innerText = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
}

let updateClock = () => {
    let time = new Date().getHours();
    let messageText;
    let image;

    if (time == partyTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    }
    else if (time == wakeupTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }
    else if (time == napTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    }
    else if (time < noon){
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    }
    else if (time >= evening){
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    }
    else{
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }

    timeEventJS.innerText = messageText;
    lolcatImageJS.src = image;
  
  showCurrentTime();
}

setInterval(updateClock,1000);

let wakeUpEvent = () => {
    wakeupTime = wakeUpTimeSelector.value;
};
let lunchTimeEvent = () => {
    lunchTime = lunchTimeSelector.value;
};
let napTimeEvent = () => {
    napTime = napTimeSelector.value;
};

let partyTimeEvent = () => {

    if(partyTime < 0){
        partyTime = new Date().getHours();
        partyButton.innerText = "Party Over!";
        partyButton.style.backgroundColor = "#AD7BE9"
    }
    else{
        partyTime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#222";
    }
}



wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
napTimeSelector.addEventListener("change", napTimeEvent);
partyButton.addEventListener("click", partyTimeEvent)