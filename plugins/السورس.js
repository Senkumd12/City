let handler = async (m, { conn, command, text }) => {
let love = `‏

*✥━─━⌬〘𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت كاسبر 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 القناة 〙⌬*

*⏣⊰ https://whatsapp.com/channel/0029Vadaqas6WaKiKeJEvz2w ⊱⏣*

*⌬〘 رقمي 〙⌬*

*⏣⊰ https://wa.me/201153263863 ⊱⏣*

*⌬〘 الدعم 〙⌬*

*⏣⊰ https://chat.whatsapp.com/GY38jY0p0g49BsuYoFZhfm ⊱⏣*

*✥━─━⌬〘𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler
