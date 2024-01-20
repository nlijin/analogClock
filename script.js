setInterval(updateClock, 1000);

const hourHand = document.querySelector(".hand.hour");
const minuteHand = document.querySelector(".hand.minute");
const secondHand = document.querySelector(".hand.second");

function updateClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minutesRatio + currentDate.getHours()) / 12;
  handleRotation(secondHand, secondsRatio);
  handleRotation(minuteHand, minutesRatio);
  handleRotation(hourHand, hourRatio);
}

function handleRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

updateClock();
