let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Abhi.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *☆☆🇵🇰☆☆* ❯
│ _${usedPrefix}alive_
│ _${usedPrefix}owner_
│ _${usedPrefix}bot_
│ _${usedPrefix}runtime_
│ _${usedPrefix}infobot_
╰─────────────⦁

╭───❮ *☆☆🇵🇰☆☆* ❯
│ _${usedPrefix}video_
│ _${usedPrefix}song_
│ _${usedPrefix}play_
│ _${usedPrefix}yts_
│ _${usedPrefix}insta *link*_
│ _${usedPrefix}img_
│ _${usedPrefix}pinterest_
│ _${usedPrefix}mediafire *link*_
│ _${usedPrefix}gdrive *link*_
│ _${usedPrefix}twitter *link*_
│ _${usedPrefix}tiktok *link*_
│ _${usedPrefix}tiktokstalk_
│ _${usedPrefix}fb *link*_
│ _${usedPrefix}apk search *app name*_
│ _${usedPrefix}apk app *link*_
│ _${usedPrefix}meme *get random meme*_
╰─────────────⦁

${readMore}
╭───❮ *☆☆ 🇵🇰 ☆☆* ❯
│ _${usedPrefix}openai *text*_
│ _${usedPrefix}toanime_
│ _${usedPrefix}tomp3_
│ _${usedPrefix}toimg_
│ _${usedPrefix}tovid_
╰─────────────⦁


╭───❮ *☆☆☆🇵🇰☆☆☆* ❯
│ _${usedPrefix}bass_
│ _${usedPrefix}blown_
│ _${usedPrefix}deep_
│ _${usedPrefix}earrape_
│ _${usedPrefix}fat_
│ _${usedPrefix}fast_
│ _${usedPrefix}nightcore_
│ _${usedPrefix}reverse_
│ _${usedPrefix}squrrel_
│ _${usedPrefix}slow_
╰─────────────⦁


╭───❮ *☆☆☆ 🇵🇰 ☆☆☆* ❯
│ _${usedPrefix}math_
│ _${usedPrefix}math answer_
│ _${usedPrefix}ppt_
╰─────────────⦁

╭───❮ *☆☆☆ 🇵🇰 ☆☆☆* ❯
│ _${usedPrefix}logo_
│ _${usedPrefix}sticker_
│ _${usedPrefix}take_
│ _${usedPrefix}smaker_
│ _${usedPrefix}getsticker_
│ _${usedPrefix}emix_
│ _${usedPrefix}attp_
╰─────────────⦁

╭───❮ *☆☆☆ 🇵🇰🇵🇰🇵🇰🇵🇰* ❯
│ _${usedPrefix}autosticker_
│ _${usedPrefix}pdf_
│ _${usedPrefix}whatmusic_
│ _${usedPrefix}tempmail_
│ _${usedPrefix}checkmail_
│ _${usedPrefix}pokedex_
│ _${usedPrefix}calc_
│ _${usedPrefix}google_
│ _${usedPrefix}lyrics_
│ _${usedPrefix}readmore_
│ _${usedPrefix}ssweb_
│ _${usedPrefix}tts_
│ _${usedPrefix}trt_
│ _${usedPrefix}wiki_
│ _${usedPrefix}nowa_
│ _${usedPrefix}qrmaker_
│ _${usedPrefix}true_
│ _${usedPrefix}fancy_
│ _${usedPrefix}weather_
│ _${usedPrefix}itunes_
│ _${usedPrefix}technews_
╰─────────────⦁


╭❮  *🇵🇰☆M-r Malik☆🇵🇰* ❯
│      ◇○○○○○○○◇
│     《《《♡♡♡》》》  
│     Bot
│   Created By 
│     NASRULLAH
╰────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('📃')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menu'] 

export default handler
