const API_URL = 'https://your-backend-url.onrender.com';

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  }).then(res => res.json()).then(alert);
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  }).then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        document.getElementById("auth").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user-name").innerText = username;
        loadGames();
      } else {
        alert("Login failed");
      }
    });
}

function uploadGame() {
  const file = document.getElementById("gameZip").files[0];
  const formData = new FormData();
  formData.append("file", file);
  fetch(`${API_URL}/games/upload`, {
    method: "POST",
    headers: { "Authorization": localStorage.getItem("token") },
    body: formData
  }).then(res => res.json()).then(alert);
}

function loadGames() {
  fetch(`${API_URL}/games`)
    .then(res => res.json())
    .then(games => {
      const list = games.map(g => `<p>${g.name}</p>`).join("");
      document.getElementById("games").innerHTML = list;
    });
}