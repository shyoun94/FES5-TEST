const hours = document.getElementById("hrs");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const btnStart = document.querySelector(".start-btn");
const btnReset = document.querySelector(".reset-btn");

function setTimeInput() {
  let timeValues = [0, 0, 0]; 
  
  function setTimeValue(index, value) {
    timeValues[index] = value;
  }
  
  hours.addEventListener('input', (e) => {
    setTimeValue(0, e.target.value);
  });

  minutes.addEventListener('input', (e) => {
    setTimeValue(1, e.target.value);
  });

  seconds.addEventListener('input', (e) => {
    setTimeValue(2, e.target.value);
  });

  return timeValues;
}

const timeValues = setTimeInput();

function startTime() {
  let remainingTime = timeValues.slice(); 
  function timer() {
    console.log(remainingTime);
    remainingTime[2]--; 
    if (remainingTime[2] < 0) { 
      remainingTime[2] = 59; 
      remainingTime[1]--;
    }
    if (remainingTime[1] < 0) { 
      remainingTime[1] = 59; 
      remainingTime[0]--;
    }
    if (remainingTime[0] < 0) { 
      clearTimeout(timerId); 
      console.log("Time is up!");
      return;
    }
    setTimeout(timer, 1000); 
  }

  const timerId = setTimeout(timer, 1000); 
}

btnStart.addEventListener('click', () => {
  startTime();
})

btnStart.addEventListener('click', () => {
  startTime();
})

function padValue(input) {
  let value = input.value;
  if (value.length === 1) {
    input.value = "0" + value;
  }
}