//created by souravkl11 updated by xIKRATOSx
import fetch from 'node-fetch'
import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Put Cricbuzz Live match link here*"
try {
const response = axios.get(`https://crickbuzz.vercel.app/score?url=${args}&timestamp=`+new Date())
const res = await response
const title = res.title
const update = res.update
const current = res.current
const batsman = res.batsman
const batsmanrun = res.batsmanrun
const strr = res.sr
const ballsfaced = res.ballsfaced
const battwo = res.batsmantwo
const battworun = res.batsmantworun
const battwoballsfaced = res.batsmantwoballsfaced
const battwosr = res.batsmantwosr
const bowler = res.bowler
const bover = res.bowlerover
const brun = res.bowlerruns
const bwicket = res.bowlerwickets
const btwo = res.bowlertwo
const recentb = res.recentballs
const lastw = res.lastwicket
const runrate = res.runrate
const upmd = `${title}\n *${update}*\n\n * ${current}*\nBatsman 🏏: *${batsman} - ${batsmanrun} ${ballsfaced}\n Strike rate: ${strr}\n Batsman 2 🏏: *${battwo}* - ${battworun} ${battwoballsfaced}\n Strike rate: ${battwosr}\n\nBowler ⚾: *${bowler}*\nOver: ${bover}\nRuns: ${brun}\nWickets: ${bwickets}\nBowler 2: ${btwo}\n\n${recentb}\n\nLast wicket ❌ ${lastw}\nRun rate %: *${runrate}*\n`
 m.reply('*Live score updating... 🏏🏏*')
 m.reply(upmd)
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
  const descErrorMessage = `❌ ERROR
- Group description is empty.
- Put match ID in starting of group description. 
- Get match ID from cricbuzz today match url.
- example: https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 
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
  let response = await getCricketScore(matchId);
  await conn.sendMessage(m.chat, { text: response }, { quoted: m });
} catch {
  let response2 = await getScoreCard(matchId);
  await conn.sendMessage(m.chat, { text: response2 }, { quoted: m });
}
}
handler.command = /^score1$/i*/