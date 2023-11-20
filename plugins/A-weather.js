import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Give A Place To Search*"
try {
const response = axios.get(`https://api.openweathermap.org/list/2.5/forecast?q=${args}&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.list.name
const Country = res.list.sys.country
const Weather = res.list.weather[0].description
const Temperature = res.list.main.temp + "°C"
const Minimum_Temperature = res.list.main.temp_min + "°C"
const Maximum_Temperature = res.list.main.temp_max + "°C"
const Humidity = res.list.main.humidity + "%"
const Wind = res.list.wind.speed + "km/h"
const date_a = res.list.dt_txt[0]
const date_b = res.list.dt_txt[1]
const date_c = res.list.dt_txt[2]
const date_d = res.list.dt_txt[3]
const date_e = res.list.dt_txt[4]
const Weather2 = res.list.weather[1].description
const Weather3 = res.list.weather[2].description
const Weather4 = res.list.weather[3].description
const Weather5 = res.list.weather[4].description
const wea = `「 📍 」PLACE: ${name}\n「 🗺️ 」COUNTRY: ${Country}\n「 🌤️ 」VIEW: ${Weather}\n「 🌡️ 」TEMPERATURE: ${Temperature}\n「 💠 」 MINIMUM TEMPERATURE: ${Minimum_Temperature}\n「 📛 」 MAXIMUM TEMPERATURE: ${Maximum_Temperature}\n「 💦 」HUMIDITY: ${Humidity}\n「 🌬️ 」 WINDSPEED:
 ${Wind}\n「 🌤️ 」VIEW2: ${Weather2}\n「 🌤️ 」VIEW2: ${Weather3}\n「 🌤️ 」VIEW2: ${Weather4}\n「 🌤️ 」VIEW2: ${Weather5}\n`
m.reply(wea)
} catch {
return "*ERROR*"}}
handler.help = ['climate *<place>*']
handler.tags = ['herramientas']
handler.command = /^(climate2|weather2)$/i
export default handler