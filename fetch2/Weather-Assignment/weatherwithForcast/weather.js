const fetchWeather=async()=>{
        
    try {
        
        let API_KEY = `3b7a31f38baf3aeeac8913d77645455f`;
        let city = document.getElementById('cityName').value;

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)

        let data = await response.json();
        console.log(data);

        
          let iconId=data.weather[0].icon;
          let iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`;
          document.getElementById("weatherIcon").src = iconUrl;
        document.getElementById('min_temp').textContent=data.main.temp_min;
        document.getElementById('max_temp').textContent=data.main.temp_max;
        document.getElementById('clouds').textContent=data.clouds.all;
        document.getElementById('wind').textContent = data.wind.speed
        document.getElementById('sunrise').textContent= new Date (
            data.sys.sunrise * 1000
        ).toLocaleTimeString()
        document.getElementById('sunset').textContent= new Date(
            data.sys.sunset * 1000
        ).toLocaleTimeString()


        const googleMapUrl = `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${data.coord.lat},${data.coord.lon}`;
        document.getElementById("googleMap").src = googleMapUrl;

        forCast(city)

    } catch (error) {
        console.log(error)
    }


}


const  forCast= async (city)=> {
try {
let APIkey = "aa2338a405271c2dbb7943eb7c748def";
let res = await fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`
);
let data = await res.json();
console.log(data);
const forecastEls = document.getElementById("forecastDays");
forecastEls.innerHTML = ""; 


const dailyData = data.list.filter((item, index) => index % 8 === 0);

dailyData.forEach((day, idx) => {
  if (idx < 5) {
   
    const temp = day.main.temp;
    const icon = day.weather[0].icon;
    const date = new Date(day.dt_txt).toLocaleDateString();

    forecastEls.innerHTML += `
                <div class="forecast-day">
                    <div class="forecast-date">${date}</div>
                    <div class="forecast-icon">
                        <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                    </div>
                    <div class="forecast-temp">${temp}°C</div>
                </div>
            `;
  }
});
} catch (error) {
console.log(error);
}
}