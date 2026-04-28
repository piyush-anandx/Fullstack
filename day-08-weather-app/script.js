const result = document.getElementById("result");
const search = document.getElementById("search");

async function fetchData(city) {
  if (!city) return;
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20129e41927494b942ae6f0604954649&units=metric`,
    );

    let posts = await res.json();

    if (posts.cod !== 200) {
      result.innerHTML = `<p>❌ City not found</p>`;
      return;
    }

    result.innerHTML = `<h1>${posts.name}</h1><p>${posts.main.temp}°C</p><p>${posts.main.humidity}%</p><p>${posts.weather[0].description}</p>`;
  } catch (err) {
    console.log("Failed to load posts", err);
  }
}

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchData(e.target.value);
  }
});
