import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} YOUTUBE ${htka}*
ᴘʟᴇᴀsᴇ sᴇʟᴇᴄᴛ ᴛʜᴇ ᴛʏᴘᴇ ʙᴇʟᴏᴡ
• ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴘʟᴀʏᴀʙʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴠɪᴅᴇᴏ ʜɪᴛ ᴠɪᴅᴇᴏ ʙᴜᴛᴛᴏɴ
• ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ ᴠɪᴅᴇᴏ ғɪʟᴇ ᴘʟᴀʏᴀʙʟᴇ ɪɴ ᴅᴇᴠɪᴄᴇ ɢᴀʟʟᴇʀʏ, ʜɪᴛ ᴅᴏᴄᴜᴍᴇɴᴛ ʙᴜᴛᴛᴏɴ

\t${fig}
`
let buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `${usedPrefix}video ${text} ` }, { buttonText: { displayText: 'Document' }, buttonId: `${usedPrefix}playdoc2 ${text} ` }]
await m.react('🔁')						 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/jLnr3K9/20231025-195821.jpg' }, caption: capt, footer: `${footerTXT}`, buttons }, { quoted: m })
}

handler.command = /^optv?$/i


export default handler