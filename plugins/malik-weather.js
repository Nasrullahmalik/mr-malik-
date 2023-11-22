import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Give A Place To Search*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.city.name
const Country = res.data.city.country
const Weather = res.data.list[0].weather[0].description
const cldc = res.data.list[0].clouds.all + "%"
const Temperature = res.data.list[0].main.temp + "°C"
const Wind = res.data.list[0].wind.speed + "km/h"

//1weather prediction for next 1 hours

「 📅️ 」Date: ${dt1}\n「 🌤️ 」VIEW: ${Weather1}\n「 🌡️ 」TEMPERATURE: ${Temperature1}\n「 ☁ 」 Clouds Cover: ${cldc1}\n「 🌀 」WINDSPEED: ${Wind1}

const dt1 = res.data.list[0].dt_txt
const Weather1 = res.data.list[1].weather[0].description
const cldc1 = res.data.list[1].clouds.all + "%"
const Temperature1 = res.data.list[1].main.temp + "°C"
const Wind1 = res.data.list[1].wind.speed + "km/h"


//2weather prediction for next 1 hours

「 📅️ 」Date: ${dt2}\n「 🌤️ 」VIEW: ${Weather2}\n「 🌡️ 」TEMPERATURE: ${Temperature2}\n「 ☁ 」 Clouds Cover: ${cldc2}\n「 🌀 」WINDSPEED: ${Wind2}

const dt2 = res.data.list[1].dt_txt
const Weather2 = res.data.list[2].weather[0].description
const cldc2 = res.data.list[2].clouds.all + "%"
const Temperature2 = res.data.list[2].main.temp + "°C"
const Wind2 = res.data.list[2].wind.speed + "km/h"


//3weather prediction for next 1 hours

「 📅️ 」Date: ${dt3}\n「 🌤️ 」VIEW: ${Weather3}\n「 🌡️ 」TEMPERATURE: ${Temperature3}\n「 ☁ 」 Clouds Cover: ${cldc3}\n「 🌀 」WINDSPEED: ${Wind3}

const dt3 = res.data.list[2].dt_txt
const Weather3 = res.data.list[3].weather[0].description
const cldc3 = res.data.list[3].clouds.all + "%"
const Temperature3 = res.data.list[3].main.temp + "°C"
const Wind3 = res.data.list[3].wind.speed + "km/h"


//4weather prediction for next 1 hours

「 📅️ 」Date: ${dt4}\n「 🌤️ 」VIEW: ${Weather4}\n「 🌡️ 」TEMPERATURE: ${Temperature4}\n「 ☁ 」 Clouds Cover: ${cldc4}\n「 🌀 」WINDSPEED: ${Wind4}

const dt4 = res.data.list[3].dt_txt
const Weather4 = res.data.list[4].weather[0].description
const cldc4 = res.data.list[4].clouds.all + "%"
const Temperature4 = res.data.list[4].main.temp + "°C"
const Wind4 = res.data.list[4].wind.speed + "km/h"


//5weather prediction for next 1 hours

「 📅️ 」Date: ${dt5}\n「 🌤️ 」VIEW: ${Weather5}\n「 🌡️ 」TEMPERATURE: ${Temperature5}\n「 ☁ 」 Clouds Cover: ${cldc5}\n「 🌀 」WINDSPEED: ${Wind5}

const dt5 = res.data.list[4].dt_txt
const Weather5 = res.data.list[5].weather[0].description
const cldc5 = res.data.list[5].clouds.all + "%"
const Temperature5 = res.data.list[5].main.temp + "°C"
const Wind5 = res.data.list[5].wind.speed + "km/h"


//6weather prediction for next 1 hours

「 📅️ 」Date: ${dt6}\n「 🌤️ 」VIEW: ${Weather6}\n「 🌡️ 」TEMPERATURE: ${Temperature6}\n「 ☁ 」 Clouds Cover: ${cldc6}\n「 🌀 」WINDSPEED: ${Wind6}

const dt6 = res.data.list[5].dt_txt
const Weather6 = res.data.list[6].weather[0].description
const cldc6 = res.data.list[6].clouds.all + "%"
const Temperature6 = res.data.list[6].main.temp + "°C"
const Wind6 = res.data.list[6].wind.speed + "km/h"



//7weather prediction for next 1 hours

「 📅️ 」Date: ${dt7}\n「 🌤️ 」VIEW: ${Weather7}\n「 🌡️ 」TEMPERATURE: ${Temperature7}\n「 ☁ 」 Clouds Cover: ${cldc7}\n「 🌀 」WINDSPEED: ${Wind7}

const dt7 = res.data.list[6].dt_txt
const Weather7 = res.data.list[7].weather[0].description
const cldc7 = res.data.list[7].clouds.all + "%"
const Temperature7 = res.data.list[7].main.temp + "°C"
const Wind7 = res.data.list[7].wind.speed + "km/h"


//8weather prediction for next 1 hours

「 📅️ 」Date: ${dt8}\n「 🌤️ 」VIEW: ${Weather8}\n「 🌡️ 」TEMPERATURE: ${Temperature8}\n「 ☁ 」 Clouds Cover: ${cldc8}\n「 🌀 」WINDSPEED: ${Wind8}

const dt8 = res.data.list[7].dt_txt
const Weather8 = res.data.list[8].weather[0].description
const cldc8 = res.data.list[8].clouds.all + "%"
const Temperature8 = res.data.list[8].main.temp + "°C"
const Wind8 = res.data.list[8].wind.speed + "km/h"


//9weather prediction for next 1 hours

「 📅️ 」Date: ${dt9}\n「 🌤️ 」VIEW: ${Weather9}\n「 🌡️ 」TEMPERATURE: ${Temperature9}\n「 ☁ 」 Clouds Cover: ${cldc9}\n「 🌀 」WINDSPEED: ${Wind9}

const dt9 = res.data.list[8].dt_txt
const Weather9 = res.data.list[9].weather[0].description
const cldc9 = res.data.list[9].clouds.all + "%"
const Temperature9 = res.data.list[9].main.temp + "°C"
const Wind9 = res.data.list[9].wind.speed + "km/h"


//10weather prediction for next 1 hours

「 📅️ 」Date: ${dt10}\n「 🌤️ 」VIEW: ${Weather10}\n「 🌡️ 」TEMPERATURE: ${Temperature10}\n「 ☁ 」 Clouds Cover: ${cldc10}\n「 🌀 」WINDSPEED: ${Wind10}

const dt10 = res.data.list[9].dt_txt
const Weather10 = res.data.list[10].weather[0].description
const cldc10 = res.data.list[10].clouds.all + "%"
const Temperature10 = res.data.list[10].main.temp + "°C"
const Wind10 = res.data.list[10].wind.speed + "km/h"


//11weather prediction for next 1 hours

「 📅️ 」Date: ${dt11}\n「 🌤️ 」VIEW: ${Weather11}\n「 🌡️ 」TEMPERATURE: ${Temperature11}\n「 ☁ 」 Clouds Cover: ${cldc11}\n「 🌀 」WINDSPEED: ${Wind11}

const dt11 = res.data.list[10].dt_txt
const Weather11 = res.data.list[11].weather[0].description
const cldc11 = res.data.list[11].clouds.all + "%"
const Temperature11 = res.data.list[11].main.temp + "°C"
const Wind11 = res.data.list[11].wind.speed + "km/h"


//12weather prediction for next 2 hours

「 📅️ 」Date: ${dt12}\n「 🌤️ 」VIEW: ${Weather12}\n「 🌡️ 」TEMPERATURE: ${Temperature12}\n「 ☁ 」 Clouds Cover: ${cldc12}\n「 🌀 」WINDSPEED: ${Wind12}

const dt12 = res.data.list[11].dt_txt
const Weather12 = res.data.list[12].weather[0].description
const cldc12 = res.data.list[12].clouds.all + "%"
const Temperature12 = res.data.list[12].main.temp + "°C"
const Wind12 = res.data.list[12].wind.speed + "km/h"


//13weather prediction for next 3 hours

「 📅️ 」Date: ${dt13}\n「 🌤️ 」VIEW: ${Weather13}\n「 🌡️ 」TEMPERATURE: ${Temperature13}\n「 ☁ 」 Clouds Cover: ${cldc13}\n「 🌀 」WINDSPEED: ${Wind13}

const dt13 = res.data.list[12].dt_txt
const Weather13 = res.data.list[13].weather[0].description
const cldc13 = res.data.list[13].clouds.all + "%"
const Temperature13 = res.data.list[13].main.temp + "°C"
const Wind13 = res.data.list[13].wind.speed + "km/h"


//14weather prediction for next 3 hours

「 📅️ 」Date: ${dt14}\n「 🌤️ 」VIEW: ${Weather14}\n「 🌡️ 」TEMPERATURE: ${Temperature14}\n「 ☁ 」 Clouds Cover: ${cldc14}\n「 🌀 」WINDSPEED: ${Wind14}

const dt14 = res.data.list[13].dt_txt
const Weather14 = res.data.list[14].weather[0].description
const cldc14 = res.data.list[14].clouds.all + "%"
const Temperature14 = res.data.list[14].main.temp + "°C"
const Wind14 = res.data.list[14].wind.speed + "km/h"


//15weather prediction for next 3 hours

「 📅️ 」Date: ${dt15}\n「 🌤️ 」VIEW: ${Weather15}\n「 🌡️ 」TEMPERATURE: ${Temperature15}\n「 ☁ 」 Clouds Cover: ${cldc15}\n「 🌀 」WINDSPEED: ${Wind15}

const dt15 = res.data.list[14].dt_txt
const Weather15 = res.data.list[15].weather[0].description
const cldc15 = res.data.list[15].clouds.all + "%"
const Temperature15 = res.data.list[15].main.temp + "°C"
const Wind15 = res.data.list[15].wind.speed + "km/h"


//16weather prediction for next 3 hours

「 📅️ 」Date: ${dt16}\n「 🌤️ 」VIEW: ${Weather16}\n「 🌡️ 」TEMPERATURE: ${Temperature16}\n「 ☁ 」 Clouds Cover: ${cldc16}\n「 🌀 」WINDSPEED: ${Wind16}

const dt16 = res.data.list[15].dt_txt
const Weather16 = res.data.list[16].weather[0].description
const cldc16 = res.data.list[16].clouds.all + "%"
const Temperature16 = res.data.list[16].main.temp + "°C"
const Wind16 = res.data.list[16].wind.speed + "km/h"


//17weather prediction for next 3 hours

「 📅️ 」Date: ${dt17}\n「 🌤️ 」VIEW: ${Weather17}\n「 🌡️ 」TEMPERATURE: ${Temperature17}\n「 ☁ 」 Clouds Cover: ${cldc17}\n「 🌀 」WINDSPEED: ${Wind17}

const dt17 = res.data.list[16].dt_txt
const Weather17 = res.data.list[17].weather[0].description
const cldc17 = res.data.list[17].clouds.all + "%"
const Temperature17 = res.data.list[17].main.temp + "°C"
const Wind17 = res.data.list[17].wind.speed + "km/h"


//18weather prediction for next 3 hours

「 📅️ 」Date: ${dt18}\n「 🌤️ 」VIEW: ${Weather18}\n「 🌡️ 」TEMPERATURE: ${Temperature18}\n「 ☁ 」 Clouds Cover: ${cldc18}\n「 🌀 」WINDSPEED: ${Wind18}

const dt18 = res.data.list[17].dt_txt
const Weather18 = res.data.list[18].weather[0].description
const cldc18 = res.data.list[18].clouds.all + "%"
const Temperature18 = res.data.list[18].main.temp + "°C"
const Wind18 = res.data.list[18].wind.speed + "km/h"


//19weather prediction for next 3 hours

「 📅️ 」Date: ${dt19}\n「 🌤️ 」VIEW: ${Weather19}\n「 🌡️ 」TEMPERATURE: ${Temperature19}\n「 ☁ 」 Clouds Cover: ${cldc19}\n「 🌀 」WINDSPEED: ${Wind19}

const dt19 = res.data.list[18].dt_txt
const Weather19 = res.data.list[19].weather[0].description
const cldc19 = res.data.list[19].clouds.all + "%"
const Temperature19 = res.data.list[19].main.temp + "°C"
const Wind19 = res.data.list[19].wind.speed + "km/h"


//20weather prediction for next 3 hours

「 📅️ 」Date: ${dt20}\n「 🌤️ 」VIEW: ${Weather20}\n「 🌡️ 」TEMPERATURE: ${Temperature20}\n「 ☁ 」 Clouds Cover: ${cldc20}\n「 🌀 」WINDSPEED: ${Wind20}

const dt20 = res.data.list[19].dt_txt
const Weather20 = res.data.list[20].weather[0].description
const cldc20 = res.data.list[20].clouds.all + "%"
const Temperature20 = res.data.list[20].main.temp + "°C"
const Wind20 = res.data.list[20].wind.speed + "km/h"

//21weather prediction for next 3 hours

「 📅️ 」Date: ${dt21}\n「 🌤️ 」VIEW: ${Weather21}\n「 🌡️ 」TEMPERATURE: ${Temperature21}\n「 ☁ 」 Clouds Cover: ${cldc21}\n「 🌀 」WINDSPEED: ${Wind21}

const dt21 = res.data.list[20].dt_txt
const Weather21 = res.data.list[21].weather[0].description
const cldc21 = res.data.list[21].clouds.all + "%"
const Temperature21 = res.data.list[21].main.temp + "°C"
const Wind21 = res.data.list[21].wind.speed + "km/h"


//22weather prediction for next 3 hours

「 📅️ 」Date: ${dt22}\n「 🌤️ 」VIEW: ${Weather22}\n「 🌡️ 」TEMPERATURE: ${Temperature22}\n「 ☁ 」 Clouds Cover: ${cldc22}\n「 🌀 」WINDSPEED: ${Wind22}

const dt22 = res.data.list[21].dt_txt
const Weather22 = res.data.list[22].weather[0].description
const cldc22 = res.data.list[22].clouds.all + "%"
const Temperature24 = res.data.list[22].main.temp + "°C"
const Wind22 = res.data.list[22].wind.speed + "km/h"

//23weather prediction for next 3 hours

「 📅️ 」Date: ${dt23}\n「 🌤️ 」VIEW: ${Weather23}\n「 🌡️ 」TEMPERATURE: ${Temperature23}\n「 ☁ 」 Clouds Cover: ${cldc23}\n「 🌀 」WINDSPEED: ${Wind23}

const dt23 = res.data.list[22].dt_txt
const Weather23 = res.data.list[23].weather[0].description
const cldc23 = res.data.list[23].clouds.all + "%"
const Temperature23 = res.data.list[23].main.temp + "°C"
const Wind23 = res.data.list[23].wind.speed + "km/h"

//24weather prediction for next 3 hours

「 📅️ 」Date: ${dt24}\n「 🌤️ 」VIEW: ${Weather24}\n「 🌡️ 」TEMPERATURE: ${Temperature24}\n「 ☁ 」 Clouds Cover: ${cldc24}\n「 🌀 」WINDSPEED: ${Wind24}

const dt24 = res.data.list[23].dt_txt
const Weather24 = res.data.list[24].weather[0].description
const cldc24 = res.data.list[24].clouds.all + "%"
const Temperature24 = res.data.list[24].main.temp + "°C"
const Wind24 = res.data.list[24].wind.speed + "km/h"

const wea = `Whatsapp Weather Prediction System\n Created by: *Nasrullah* \n follow me on facebook:\n facebook.com/NasrullahMachi\n\n  🔴 *Now*\n「 📍 」PLACE: ${name}\n「 🗺️ 」COUNTRY: ${Country}\n「 🌤️ 」VIEW: ${Weather1}\n「 🌡️ 」TEMPERATURE: ${Temperature1}\n「 ☁ 」 Clouds Cover: ${cldc1}\n「 🌀 」WINDSPEED: ${Wind1}\n「 📅️ 」Date: ${dt1}\n「 🌤️ 」VIEW: ${Weather1}\n「 🌡️ 」TEMPERATURE: ${Temperature1}\n「 ☁ 」 Clouds Cover: ${cldc1}\n「 🌀 」WINDSPEED: ${Wind1}\n「 📅️ 」Date: ${dt2}\n「 🌤️ 」VIEW: ${Weather2}\n「 🌡️ 」TEMPERATURE: ${Temperature2}\n「 ☁ 」 Clouds Cover: ${cldc2}\n「 🌀 」WINDSPEED: ${Wind2}\n「 📅️ 」Date: ${dt3}\n「 🌤️ 」VIEW: ${Weather3}\n「 🌡️ 」TEMPERATURE: ${Temperature3}\n「 ☁ 」 Clouds Cover: ${cldc3}\n「 🌀 」WINDSPEED: ${Wind3}\n「 📅️ 」Date: ${dt4}\n「 🌤️ 」VIEW: ${Weather4}\n「 🌡️ 」TEMPERATURE: ${Temperature4}\n「 ☁ 」 Clouds Cover: ${cldc4}\n「 🌀 」WINDSPEED: ${Wind4}\n「 📅️ 」Date: ${dt5}\n「 🌤️ 」VIEW: ${Weather5}\n「 🌡️ 」TEMPERATURE: ${Temperature5}\n「 ☁ 」 Clouds Cover: ${cldc5}\n「 🌀 」WINDSPEED: ${Wind5}\n「 📅️ 」Date: ${dt6}\n「 🌤️ 」VIEW: ${Weather6}\n「 🌡️ 」TEMPERATURE: ${Temperature6}\n「 ☁ 」 Clouds Cover: ${cldc6}\n「 🌀 」WINDSPEED: ${Wind6}\n「 📅️ 」Date: ${dt7}\n「 🌤️ 」VIEW: ${Weather7}\n「 🌡️ 」TEMPERATURE: ${Temperature7}\n「 ☁ 」 Clouds Cover: ${cldc7}\n「 🌀 」WINDSPEED: ${Wind7}\n「 📅️ 」Date: ${dt8}\n「 🌤️ 」VIEW: ${Weather8}\n「 🌡️ 」TEMPERATURE: ${Temperature8}\n「 ☁ 」 Clouds Cover: ${cldc8}\n「 🌀 」WINDSPEED: ${Wind8}\n「 📅️ 」Date: ${dt9}\n「 🌤️ 」VIEW: ${Weather9}\n「 🌡️ 」TEMPERATURE: ${Temperature9}\n「 ☁ 」 Clouds Cover: ${cldc9}\n「 🌀 」WINDSPEED: ${Wind9}\n「 🐽📅️ 」Date: ${dt10}\n「 🌤️ 」VIEW: ${Weather10}\n「 🌡️ 」TEMPERATURE: ${Temperature10}\n「 ☁ 」 Clouds Cover: ${cldc10}\n「 🌀 」WINDSPEED: ${Wind10}\n「 🐽📅️ 」Date: ${dt11}\n「 🌤️ 」VIEW: ${Weather11}\n「 🌡️ 」TEMPERATURE: ${Temperature11}\n「 ☁ 」 Clouds Cover: ${cldc11}\n「 🌀 」WINDSPEED: ${Wind11}\n「 🐽📅️ 」Date: ${dt12}\n「 🌤️ 」VIEW: ${Weather12}\n「 🌡️ 」TEMPERATURE: ${Temperature12}\n「 ☁ 」 Clouds Cover: ${cldc12}\n「 🌀 」WINDSPEED: ${Wind12}\n「 🐽📅️ 」Date: ${dt13}\n「 🌤️ 」VIEW: ${Weather13}\n「 🌡️ 」TEMPERATURE: ${Temperature13}\n「 ☁ 」 Clouds Cover: ${cldc13}\n「 🌀 」WINDSPEED: ${Wind13}\n「 🐽📅️ 」Date: ${dt14}\n「 🌤️ 」VIEW: ${Weather14}\n「 🌡️ 」TEMPERATURE: ${Temperature14}\n「 ☁ 」 Clouds Cover: ${cldc14}\n「 🌀 」WINDSPEED: ${Wind14}\n「 🐽📅️ 」Date: ${dt15}\n「 🌤️ 」VIEW: ${Weather15}\n「 🌡️ 」TEMPERATURE: ${Temperature15}\n「 ☁ 」 Clouds Cover: ${cldc15}\n「 🌀 」WINDSPEED: ${Wind15}\n「 🐽📅️ 」Date: ${dt16}\n「 🌤️ 」VIEW: ${Weather16}\n「 🌡️ 」TEMPERATURE: ${Temperature16}\n「 ☁ 」 Clouds Cover: ${cldc16}\n「 🌀 」WINDSPEED: ${Wind16}\n「 🐽📅️ 」Date: ${dt17}\n「 🌤️ 」VIEW: ${Weather17}\n「 🌡️ 」TEMPERATURE: ${Temperature17}\n「 ☁ 」 Clouds Cover: ${cldc17}\n「 🌀 」WINDSPEED: ${Wind17}\n「 🐽📅️ 」Date: ${dt18}\n「 🌤️ 」VIEW: ${Weather18}\n「 🌡️ 」TEMPERATURE: ${Temperature18}\n「 ☁ 」 Clouds Cover: ${cldc18}\n「 🌀 」WINDSPEED: ${Wind18}\n「 🐽📅️ 」Date: ${dt19}\n「 🌤️ 」VIEW: ${Weather19}\n「 🌡️ 」TEMPERATURE: ${Temperature19}\n「 ☁ 」 Clouds Cover: ${cldc19}\n「 🌀 」WINDSPEED: ${Wind19}\n「 🐽📅️ 」Date: ${dt20}\n「 🌤️ 」VIEW: ${Weather20}\n「 🌡️ 」TEMPERATURE: ${Temperature20}\n「 ☁ 」 Clouds Cover: ${cldc20}\n「 🌀 」WINDSPEED: ${Wind20}\n「 🐽📅️ 」Date: ${dt21}\n「 🌤️ 」VIEW: ${Weather21}\n「 🌡️ 」TEMPERATURE: ${Temperature21}\n「 ☁ 」 Clouds Cover: ${cldc21}\n「 🌀 」WINDSPEED: ${Wind21}\n「 🐽📅️ 」Date: ${dt22}\n「 🌤️ 」VIEW: ${Weather22}\n「 🌡️ 」TEMPERATURE: ${Temperature22}\n「 ☁ 」 Clouds Cover: ${cldc22}\n「 🌀 」WINDSPEED: ${Wind22}\n「 🐽📅️ 」Date: ${dt23}\n「 🌤️ 」VIEW: ${Weather23}\n「 🌡️ 」TEMPERATURE: ${Temperature23}\n「 ☁ 」 Clouds Cover: ${cldc23}\n「 🌀 」WINDSPEED: ${Wind23}\n[ 🐽📅️ 」Date: ${dt24}\n「 🌤️ 」VIEW: ${Weather24}\n「 🌡️ 」TEMPERATURE: ${Temperature24}\n「 ☁ 」 Clouds Cover: ${cldc24}\n「 🌀 」WINDSPEED: ${Wind24}`
m.reply(wea)
} catch {
return "*ERROR*"}}
handler.help = ['climate3 *<place>*']
handler.tags = ['herramientas']
handler.command = /^(climate3|weather3)$/i
export default handler