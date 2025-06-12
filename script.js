
function showSection(id) {
  ['upload', 'games', 'dashboard', 'leaderboard'].forEach(section => {
    document.getElementById(section).style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function login() {
  alert("Login system is mocked. Backend required.");
}

function uploadGame() {
  const title = document.getElementById('gameTitle').value;
  const file = document.getElementById('gameFile').files[0];
  alert('Game "' + title + '" uploaded (mock). Backend will handle real upload.');
}

function searchGames(query) {
  document.getElementById('gameList').innerHTML = "<p>Searching for: " + query + " (mock)</p>";
}
