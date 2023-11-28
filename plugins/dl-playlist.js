import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} YOUTUBE ${htka}*
ᴘʟᴇᴀsᴇ sᴇʟᴇᴄᴛ ᴛʜᴇ ᴛʏᴘᴇ ʙᴇʟᴏᴡ
• ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴘʟᴀʏᴀʙʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴠɪᴅᴇᴏ ʜɪᴛ ᴠɪᴅᴇᴏ ʙᴜᴛᴛᴏɴ
• ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴘʟᴀʏᴀʙʟᴇ ᴡʜᴀᴛsᴀᴘᴘ Audio ʜɪᴛ Audio ʙᴜᴛᴛᴏɴ
`
let buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `${usedPrefix}video ${text} ` }, { buttonText: { displayText: 'Audio' }, buttonId: `${usedPrefix}playdoc ${text} ` }]
await m.react('🔁')						 
conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/XJ6gsgV/IMG-20231117-WA0020.jpg' }, caption: capt, footer: `${footerTXT}`, buttons }, { quoted: m })
}

handler.command = /^playlist?$/i


export default handler