
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
`
let img = 'https://replicate.delivery/pbxt/i6cm2SEHYBpDFZnT7bsziAtFXN93pRQ1lE0dakq9ghwSjVdE/out.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler