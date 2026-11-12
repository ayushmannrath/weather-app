const hours = [
  { time: "05:00 AM", temp: "22°", icon: "fa-sun" },
  { time: "06:00 AM", temp: "18°", icon: "fa-cloud" },
  { time: "07:00 AM", temp: "16°", icon: "fa-cloud-rain" },
  { time: "08:00 AM", temp: "14°", icon: "fa-cloud-bolt" },
];

const hoursContainer = document.querySelector(".hours");

hours.forEach((hour) => {
  hoursContainer.innerHTML += `
    <div class="hour">
      <div class="icon-circle">
        <i class="fa-solid ${hour.icon}"></i>
      </div>
      <p>${hour.time}</p>
      <p>${hour.temp}</p>
    </div>
  `;
});

const stats = [
  { icon: "fa-wind", label: "Wind", value: "6-8km/h", active: true },
  {
    icon: "fa-temperature-half",
    label: "Temperature",
    value: "16°C",
    active: false,
  },
  { icon: "fa-droplet", label: "Humidity", value: "51%", active: false },
];

const statsContainer = document.querySelector(".stats");

function renderStats() {
  statsContainer.innerHTML = "";
  stats.forEach((stat, index) => {
    statsContainer.innerHTML += `
      <div class="stat ${stat.active ? "active" : ""}" data-index="${index}">
        <i class="fa-solid ${stat.icon}"></i>
        <p>${stat.label}</p>
        <p>${stat.value}</p>
      </div>
    `;
  });
}
renderStats();

statsContainer.addEventListener("click", (event) => {
  const tile = event.target.closest(".stat");
  if (!tile) return;
  const clickedIndex = Number(tile.dataset.index);

  stats.forEach((stat, i) => {
    stat.active = i === clickedIndex;
  });
  renderStats();
});

const weather = {
  temp: "24°C",
  realFeel: "16°C",
};
const tempEl = document.querySelector("#temp");
tempEl.textContent = weather.temp;

const realFeel = document.querySelector("#real-feel-value");
realFeel.textContent = weather.realFeel;

const now = new Date();
const dayText = now.toLocaleDateString("en-US", { weekday: "long" });
const timeText = now.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

const dayEl = document.querySelector("#day");
dayEl.textContent = dayText;

const timeEl = document.querySelector("#time");
timeEl.textContent = timeText;
