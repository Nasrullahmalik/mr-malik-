
import axios from "axios"
let handler = async (m, { args }) => {

try {
let response = await axios.get(`https://crickbuzz.vercel.app/score?url=https://m.cricbuzz.com/cricket-commentary/75640/ind-vs-nz-1st-semi-final-1st-v-4th-icc-cricket-world-cup-2023`)
let data = await response.json()
const title = data.title
const update = data.update
const current = data.current
const batsman = data.batsman
const batsmanrun = data.batsmanrun
const strr = data.sr
const ballsfaced = data.ballsfaced
const battwo = batsmantwo
const battworun = data.batsmantworun
const battwoballsfaced = data.batsmantwoballsfaced
const battwosr = data.batsmantwosr
const bowler = data.bowler
const bover = data.bowlerover
const brun = data.bowlerruns
const bwicket = data.bowlerwickets
const btwo = data.bowlertwo
const recentb = data.recentballs
const lastw = data.lastwicket
const runrate = data.runrate
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