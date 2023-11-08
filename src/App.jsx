import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import Forecast from './components/Forecast'

const App = () => {

	const [input, setInput] = useState('indore')
	const [weather, setWeather] = useState({ city: null, country: null, temp: null, humidity: null, wind: null, pressure: null, temp: null })
	const [forecast, setForecast] = useState([])

	useEffect(() => {
		if (input === '') return
		getWeatherData()
		getForecastData()
	}, [input])

	console.log(forecast)

	const getWeatherData = async () => {
		try {
			const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather?units=metric&appid=e247e8c6c5a4d1bbe2005eb34eb7c6d0&q=' + input)
			
			let direction = (data.wind.deg <= 45 || data.wind.deg > 315) ? 'North, '
			: (data.wind.deg > 45 && data.wind.deg <= 135) ? 'East, '
			: (data.wind.deg > 135 && data.wind.deg <= 225) ? 'South, '
			: (data.wind.deg > 225 && data.wind.deg <= 315) ? 'West, ' : null
			
			setWeather(prev => {
				return {
					...prev,
					city: data.name,
					country: data.sys.country,
					humidity: data.main.humidity,
					pressure: data.main.pressure,
					wind: direction + data.wind.speed,
					temp: data.main.temp,
				}
			})
		} catch (error) {
			console.log(error)
		}
	}

	const getForecastData = async () => {
		try {
			const { data } = await axios.get('https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=e247e8c6c5a4d1bbe2005eb34eb7c6d0&q=' + input)
			setForecast(data.list.filter((item) => new Date(item.dt_txt.replace(' ', 'T')).getHours() === 6))
		}
		catch (error) {
			console.log(error)
		}
		}
		
		return (
			<>
			<Navbar input={setInput} />
			<Weather data={weather} />
			<Forecast data={forecast} setData={setForecast} />
		</>
	)

}
export default App


