import './ClimateStats.css';
import { useClimate } from "../../context/ClimateContext";
import { useEffect } from 'react'
function ClimateStats() {
  const { temperature, setTemperature, humidity, setHumidity } = useClimate();
  useEffect(() => {
    const temperatureIncrease = setTimeout(() => {
      setTemperature(temperature + 1)
    }, 10000)
    return function cleanup() {
      clearTimeout(temperatureIncrease)
    }
  })
  useEffect(() => {
    const humidityDecrease = setTimeout(() => {
      setHumidity(humidity - 1)
    }, 10000)
    return function cleanup() {
      clearTimeout(humidityDecrease)
    }
  })
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
