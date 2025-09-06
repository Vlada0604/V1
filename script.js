let dailyGoal = localStorage.getItem("dailyGoal") 
  ? parseInt(localStorage.getItem("dailyGoal")) 
  : 2000;

let currentWater = 0;

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const addBtn = document.getElementById("add-water");
const input = document.getElementById("water-input");

function updateProgress() {
  let percent = Math.min((currentWater / dailyGoal) * 100, 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = `${currentWater} / ${dailyGoal} мл`;
}

addBtn.addEventListener("click", () => {
  let amount = parseInt(input.value);
  if (!isNaN(amount) && amount > 0) {
    currentWater += amount;
    updateProgress();
    input.value = "";
  }
});

updateProgress();
