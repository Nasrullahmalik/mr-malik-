//created by souravkl11 updated by xIKRATOSx
import fetch from 'node-fetch'
import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Put Cricbuzz Live match link here*"
try {
var dataponse = axios.get(`https://crickbuzz.vercel.app/score?url=${args}&timestamp=`+new Date())
var data = await dataponse
var title = data.title
var update = data.update
var current = data.current
var batsman = data.batsman
var batsmanrun = data.batsmanrun
var strr = data.sr
var ballsfaced = data.ballsfaced
var battwo = data.batsmantwo
var battworun = data.batsmantworun
var battwoballsfaced = data.batsmantwoballsfaced
var battwosr = data.batsmantwosr
var bowler = data.bowler
var bover = data.bowlerover
var brun = data.bowlerruns
var bwicket = data.bowlerwickets
var btwo = data.bowlertwo
var recentb = data.recentballs
var lastw = data.lastwicket
var runrate = data.runrate
 m.reply('*Live score updating... 🏏🏏*')
 m.reply('${title}\n *${update}*\n\n * ${current}*\nBatsman 🏏: *${batsman} - ${batsmanrun} ${ballsfaced}\n Strike rate: ${strr}\n Batsman 2 🏏: *${battwo}* - ${battworun} ${battwoballsfaced}\n Strike rate: ${battwosr}\n\nBowler ⚾: *${bowler}*\nOver: ${bover}\nRuns: ${brun}\nWickets: ${bwickets}\nBowler 2: ${btwo}\n\n${recentb}\n\nLast wicket ❌ ${lastw}\nRun rate %: *${runrate}*\n')
}catch {
return "*ERROR*"}}
handler.help = ['.score *<Link>*']
handler.tags = ['malik']
handler.command = ['cricket', 'score']

export default handler



//incomplete project
/*import { getCricketScore, getScoreCard } from "../lib/cricket.js";

let handler = async(m, { conn, command, text, usedPrefix }) => {
  let { groupDesc, reply } = msgInfoObj;
  var descErrorMessage = `❌ ERROR
- Group description is empty.
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scodata/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
- so match ID is 37572 !
# If you've put correct match ID in description starting and still facing this error then contact developer wa.me/923470027813\nwa.me/19293514545`;

  if (!groupDesc) {
    await m.reply(descErrorMessage);
    return;
  }

  let matchId = groupDesc.slice(0, 5);
  if (isNaN(Number(matchId))) {
    await m.reply(descErrorMessage);
    return;
  }
try {
  let dataponse = await getCricketScore(matchId);
  await conn.sendMessage(m.chat, { text: dataponse }, { quoted: m });
} catch {
  let dataponse2 = await getScoreCard(matchId);
  await conn.sendMessage(m.chat, { text: dataponse2 }, { quoted: m });
}
}
handler.command = /^score1$/i*/