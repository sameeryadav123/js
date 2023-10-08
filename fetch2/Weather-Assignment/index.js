const fetchWeather = async () => {

    try {
        let API_KEY = `3b7a31f38baf3aeeac8913d77645455f`;
        let city = document.getElementById('cityName').value;

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)

        let data = await response.json();
        console.log(data);

        let iconId = data.weather[0].icon;
        let iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`;
        document.getElementById("weatherIcon").src = iconUrl;
        document.getElementById('minTemp').textContent = data.main.temp_min;
        document.getElementById('maxTemp').textContent = data.main.temp_max;
        document.getElementById('wind').textContent = data.wind.speed
        document.getElementById('clouds').textContent = data.clouds.all
        document.getElementById('sunrise').textContent = new Date(
            data.sys.sunrise * 1000

        ).toLocaleTimeString();

        document.getElementById('sunset').textContent = new Date(
            data.sys.sunset * 1000
        ).toLocaleTimeString();



        const googleMapUrl = `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${data.coord.lat},${data.coord.lon}`;
        document.getElementById("googleMap").src = googleMapUrl;
    } catch (error) {
        console.log(error)
    }
}
