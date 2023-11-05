let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Abhi.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *☆☆🇵🇰☆☆* ❯
│ _${usedPrefix}ping_
│ _${usedPrefix}uptime_
│ _${usedPrefix}enable_
│ _${usedPrefix}alive_
│ _${usedPrefix}owner_
│ _${usedPrefix}report_
│ _${usedPrefix}bot_
│ _${usedPrefix}script_
│ _${usedPrefix}runtime_
│ _${usedPrefix}infobot_
│ _${usedPrefix}donate_
│ _${usedPrefix}groups_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}listprem_
╰─────────────⦁

╭───❮ *☆☆🇵🇰☆☆* ❯
│ _${usedPrefix}*on/off* public_
│ _${usedPrefix}*on/off* autoreact_
│ _${usedPrefix}update_
│ _${usedPrefix}sudo_
│ _${usedPrefix}autoadmin_
│ _${usedPrefix}left_
│ _${usedPrefix}banchat_
│ _${usedPrefix}unbanchat_
│ _${usedPrefix}ban_
│ _${usedPrefix}unban_
│ _${usedPrefix}banlist_
│ _${usedPrefix}block_
│ _${usedPrefix}unblock_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}bc_
│ _${usedPrefix}bcgc_
│ _${usedPrefix}join_ 
│ _${usedPrefix}restart_
│ _${usedPrefix}setpp_
│ _${usedPrefix}setprefix_
│ _${usedPrefix}resetprefix_
│ _${usedPrefix}resetuser_
╰─────────────⦁
${readMore} 
╭───❮ *☆☆🇵🇰☆☆* ❯
│ _${usedPrefix}kick *@tag*_
│ _${usedPrefix}promote *@tag*_
│ _${usedPrefix}demote *@tag*_
│ _${usedPrefix}infogroup_
│ _${usedPrefix}getbio *@tag*_
│ _${usedPrefix}resetlink_
│ _${usedPrefix}link_
│ _${usedPrefix}*on/off* antilink_
│ _${usedPrefix}*on/off* antidelete_
│ _${usedPrefix}invite_
│ _${usedPrefix}setppgc *image*_
│ _${usedPrefix}setname *text*_
│ _${usedPrefix}setdesc *text*_
│ _${usedPrefix}setwelcome *text*_
│ _${usedPrefix}setbye *text*_
│ _${usedPrefix}hidetag *text/image/audio/vid*_
│ _${usedPrefix}warn *@tag*_
│ _${usedPrefix}unwarn *@tag*_
│ _${usedPrefix}listwarn_
│ _${usedPrefix}listnum_
│ _${usedPrefix}kicknum_
│ _${usedPrefix}group *open/close*_
│ _${usedPrefix}tagall_
╰─────────────⦁


╭───❮ *☆☆🇵🇰☆☆* ❯
│ _${usedPrefix}song_
│ _${usedPrefix}play_
│ _${usedPrefix}yts_
│ _${usedPrefix}insta *link*_
│ _${usedPrefix}img_
│ _${usedPrefix}pinterest_
│ _${usedPrefix}mediafire *link*_
│ _${usedPrefix}gdrive *link*_
│ _${usedPrefix}gitclone *link*_
│ _${usedPrefix}twitter *link*_
│ _${usedPrefix}tiktok *link*_
│ _${usedPrefix}tiktokstalk_
│ _${usedPrefix}spotify_
│ _${usedPrefix}fb *link*_
╰─────────────⦁


╭───❮ *☆☆ 🇵🇰 ☆☆* ❯
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
│ _${usedPrefix}tictactoe_
│ _${usedPrefix}delttt_
│ _${usedPrefix}math_
│ _${usedPrefix}math answer_
│ _${usedPrefix}ppt_
│ _${usedPrefix}slot_
│ _${usedPrefix}casino_
╰─────────────⦁

╭───❮ *☆☆☆ 🇵🇰 ☆☆☆* ❯
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


╭───❮  *🇵🇰☆☆☆M-r Malik☆☆☆🇵🇰* ❯
│      ◇○○○○○○○◇
│   《《《《》》♡♡♡》》》》》
╰────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('📃')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menu'] 

export default handler