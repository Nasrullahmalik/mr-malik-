
import { youtubeSearch } from '@bochilteam/scraper';
import yts from 'yt-search';

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
const name = await conn.getName(m.sender);
try {
  if (!text) throw `Where is the text?\nExample; *${usedPrefix + command}* arcade`;
  await conn.reply(m.chat, global.wait, m);
  await	m.react('🔀');
  const ikratosytr = await yts(text);
  const depat = ikratosytr.all;
  const listSections2 = [];
  Object.values(depat).map((v, index) => {
    listSections2.push([index + ' ' + cmenub + ' ' + `${v.title}`, [
            ['Video🎧', usedPrefix + 'ytmp4 ' + `${v.url}` , '\n⌚ *Duration:* ' + `${v.timestamp}` + '\n📎 *Url:* ' + `${v.url}`],
            ['Audio 🎧', usedPrefix + 'ytmp3 ' + `${v.url}` + ' yes', '\n⌚ *Duration:* ' + `${v.timestamp}` +  '\n📎 *Url:* ' + `${v.url}`]
          ]])
    });
    await conn.sendMessage(m.chat, '*───「 Youtube Search 」───* Please choose the type below...\n*Your requested text:* ${text}\n\nmr-malik • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 3494757886 ${fig} YouTube Search 🔎 ${listSections2}', m);
    
  return 
  } catch {
  const cari = await youtubeSearch(`${text}`);
    const dapet = cari.video;
    const listSections = [];
  Object.values(dapet).map((v, index) => {
  listSections.push([index + ' ' + cmenub + ' ' + v.title, [
         ['Video🎧', usedPrefix + 'ytmp4 ' + v.url , '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n *Views:* ' + v.view + '\n📎 *Url:* ' + v.url],
         ['Audio 🎧', usedPrefix + 'ytmp3 ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
        ]])
 });
 await	m.react('🔀');
    await conn.sendMessage(m.chat, '*───「 Youtube Search 」───* Please choose the type below...\n*Your requested text:* ${text}\n\nmr-malik • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 3494757886 ${fig} YouTube Search 🔎 ${listSections}', m);
    return
 } }
handler.help = ['ytsearch <query>'];
handler.tags = ['internet'];
handler.command = /^yts(earch)?$/i;
 
 
export default handler;
 




















/*import { youtubeSearch } from '@bochilteam/scraper';
import { WAConnection } from '@adiwajshing/baileys';

const handler = async (m, { conn, usedPrefix, text, args, command }) => {
  const name = await conn.getName(m.sender);
  if (!text) throw `Where is the text?\nExample: *${usedPrefix + command}* arcade`;

  const cari = await youtubeSearch(`${text}`);
  const dapet = cari.video;
  const resultText = '';

  Object.values(dapet).map((v, index) => {
    resultText += `${index + 1}. ${v.title}\n*Duration:* ${v.durationH}\n*Url:* ${v.url}\n____________\n\n`;
  });

  const message = `*───「 Youtube Search 」───*\n\nPlease select the number of the video you want to download by replying to this message with the number listed.\n*Text you requested:* ${text}\n\nɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ1 • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 347 0027813\n\n${resultText}`;
  conn.reply(m.chat, message, m);

  try {
    const response = await conn.waitForMessage(m.chat, m.sender, 60000); // wait for a message for up to 1 minute
    if (response.quoted && response.quoted.fromMe && response.quotedMsg.body && !isNaN(response.quotedMsg.body)) {
      const selectedResult = parseInt(response.quotedMsg.body);
      if (!selectedResult || selectedResult < 1 || selectedResult > dapet.length) return;
      const selectedVideo = dapet[selectedResult - 1];
      const commandText = `yta ${selectedVideo.url}`;
      const commandMessage = `Downloading audio of video "${selectedVideo.title}" Your Command: *${usedPrefix}${commandText}*.`;
      conn.reply(m.chat, commandMessage, m);
    }
  } catch (e) {
    console.log('Error:', e); // handle the error
  }
};

handler.help = ['ytsearch <query>'];
handler.tags = ['internet'];
handler.command = /^yts(earch)?$/i;

export default handler;
*/