var today = dayjs()
var timeDisplayEl = document.querySelector('.current-time')
var dateDisplayEl = document.querySelector('.current-date')
var cities = JSON.parse(localStorage.getItem("cities")) || [];


function displayTime() {
  var rightNow = dayjs().format('	h:mm:ss A');
  timeDisplayEl.textContent = rightNow;
};
displayTime();
setInterval(displayTime, 1000);

function displayDate() {
  var dateNOW = dayjs().format('dddd, MMMM D[,] YYYY');
  dateDisplayEl.textContent = dateNOW;
};
displayDate();
setInterval(displayDate, 24 * 60 * 60 * 1000);

function saveCity() {
  localStorage.setItem("cities", JSON.stringify(cities));
};

