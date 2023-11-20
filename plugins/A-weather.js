import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Give A Place To Search*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${args}&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const date_a = res.data.weather[1].dt_txt
const date_b = res.data.weather[2].dt_txt
const date_c = res.data.weather[3].dt_txt
const date_d = res.data.weather[4].dt_txt
const date_e = res.data.weather[5].dt_txt
const Weather2 = res.data.weather[1].description
const Weather3 = res.data.weather[2].description
const Weather4 = res.data.weather[3].description
const Weather5 = res.data.weather[4].description
const wea = `「 📍 」PLACE: ${name}\n「 🗺️ 」COUNTRY: ${Country}\n「 🌤️ 」VIEW: ${Weather}\n「 🌡️ 」TEMPERATURE: ${Temperature}\n「 💠 」 MINIMUM TEMPERATURE: ${Minimum_Temperature}\n「 📛 」 MAXIMUM TEMPERATURE: ${Maximum_Temperature}\n「 💦 」HUMIDITY: ${Humidity}\n「 🌬️ 」 WINDSPEED: ${Wind}\n「 🌤️ 」VIEW2: ${Weather2}\n「 🌤️ 」VIEW2: ${Weather3}\n「 🌤️ 」VIEW2: ${Weather4}\n「 🌤️ 」VIEW2: ${Weather5}\n`
m.reply(wea)
} catch {
return "*ERROR*"}}
handler.help = ['climate *<place>*']
handler.tags = ['herramientas']
handler.command = /^(climate2|weather2)$/i
export default handler