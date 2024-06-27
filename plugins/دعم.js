let handler = async (m, { conn, command, text }) => {
let love = `
⌬┇━──╌ •⤣⚡⤤• ╌──━┇⌬
اهلا بك في دعم بوت كاسبر
┇جروب الدعم 👇┇
𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧 𝓑𝓞𝓣...〔 https://chat.whatsapp.com/GY38jY0p0g49BsuYoFZhfm 〕

┇قناة البوت ننشر اكواد وكل ما يفيدك 👇┇
قناة البوت...〔 https://whatsapp.com/channel/0029Vadaqas6WaKiKeJEvz2w 〕

❐━═⏣⊰𝐵𝑌:𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧⚡𝓑𝓞𝓣⊱⏣═━❐
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler
