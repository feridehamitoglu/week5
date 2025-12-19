let userName = prompt("Lütfen isminizi giriniz");

if (!userName || userName.trim() === "") {
  userName = "Ziyaretçi";
}

document.getElementById("myName").innerText = userName;

function showTime() {
  let now = new Date();

  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");

  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ];

  let dayName = days[now.getDay()];

  document.getElementById("myClock").innerText =
    `${h}:${m}:${s} ${dayName}`;
}

showTime();
setInterval(showTime, 1000);