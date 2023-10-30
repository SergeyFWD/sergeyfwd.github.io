const lkLogin = document.getElementById("lkLogin");
const lkExit = document.getElementById("lkExit");
const loginBtn = document.getElementById("loginBtn");
const btnExit = document.getElementById("btnExit");
const btnGeo = document.getElementById("btnGeo");
const inp = document.getElementById("inp");
const name = document.getElementById("name");
const geolacation = document.getElementById("geolacation");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
let people = localStorage.getItem("username");

if (!people) {
  lkLogin.classList.remove("hidden");
  lkExit.classList.add("hidden");
} else {
  lkLogin.classList.add("hidden");
  lkExit.classList.remove("hidden");
  name.textContent = `${people}`;
}

loginBtn.addEventListener("click", () => {
  localStorage.setItem("username", inp.value);
  location.reload();
});

btnExit.addEventListener("click", () => {
  localStorage.removeItem("username");
  lkLogin.classList.remove("hidden");
  lkExit.classList.add("hidden");
});

btnGeo.addEventListener("click", () => {
  geolacation.classList.add("geolacation");

  navigator.geolocation.getCurrentPosition(function (data) {
    latitude.textContent = `${data.coords.latitude}`;
    longitude.textContent = `${data.coords.longitude}`;
  });
});
