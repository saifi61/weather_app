const apiKey = "3e88273e1ac6cc125949b609b10479c1";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;

const searchBox = document.querySelector("#location-input");

async function getWeather(city) {
  const response = await fetch(apiUrl + city);
  if (response.status == 404) {
    document.getElementById("weather-data").innerText =
      "Error: City not found";
  } else {
    var data = await response.json();

    document.getElementById("weather-data").innerHTML = `
          <h2 class="cityName">${data.name}</h2>
          <div class="description">${data.weather[0].main}</div>
          <div class="temprature">${data.main.temp} °C</div>
          `;
  }
}
document.querySelector(".getWeather").addEventListener("click", (event) => {
  getWeather(searchBox.value);
  searchBox.value = "";
  event.preventDeafult();
});

//Write you code logic here

// Error should be very specific
// Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.
