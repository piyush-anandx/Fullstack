const card = document.getElementById("card");

async function fetchData() {
  try {
    let res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Gurugram&appid=20129e41927494b942ae6f0604954649&units=metric",
    );
    let posts = await res.json();

    card.innerHTML = `<h1>${posts.name}</h1><p>${posts.main.temp}°C</p><p>${posts.main.humidity}%</p><p>${posts.weather[0].description}</p>`;
  } catch (err) {
    console.log("Failed to load posts");
  }
}
fetchData();
