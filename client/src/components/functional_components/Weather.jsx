import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
  const [weatherState, setWeather] = useState({})

  useEffect(() => {
    some_stuff()
  }, [])

  // Get weather conditions from Request
  const get_weather_icons = (weather_status) => {
    if (weather_status === "Clear"){
      return "fas fa-sun weather_icon"
    }
    else if (weather_status === "Clouds"){
      return "fas fa-cloud weather_icon"
    }
    else if (weather_status === "Thunderstorm"){
      return "fas fa-bolt weather_icon"
    }
    else if (weather_status === "Rain" || weather_status === "Drizzle" ){
      return "fas fa-cloud-showers-heavy weather_icon"
    }
    else if (weather_status === "Snow") {
      return "fas fa-snowflake weather_icon"
    }
  }

  const some_stuff = async () => {
    var search_city = 'austin'
    // Set up URL
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + search_city + "&units=imperial&appid=" + '72189b8a88f92770ea9eefc1b4f82321';
    // Do an AJAX Request
    let res = await axios.get(queryURL) 
    setWeather(res.data)
  }

  const renderWeatherData = (params) => {
    const data = {
      weather: params.weather[0].main,
      weather_description: params.weather[0].description,
      temperature: params.main.temp,
    }
    let icon_array = ["weather"]
    return Object.keys(data).map(function(key, index) {
      console.log(icon_array.indexOf(key))
      return (
        <div key={index} className="weather_data_couple">
          {icon_array.indexOf(key) === 0 ? <i className={get_weather_icons(params.weather[0].main)}></i> : "" }<div>{key}: </div>
          <div>{data[key]}</div>
        </div>
      )
    })
  }


  return (
    <div className="weather_name">
      <h1>Weather!</h1>
      <div>
        {Object.keys(weatherState).length < 1 ? "" : renderWeatherData(weatherState)}
      </div>
    </div>
  )
}