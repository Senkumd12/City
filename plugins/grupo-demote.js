var handler = async (m, { conn,usedPrefix, command, text }) => {

if (isNaN(text) && !text.match(/@/g)){
	
} else if (isNaN(text)) {
var number = text.split`@`[1]
} else if (!isNaN(text)) {
var number = text
}

if (!text && !m.quoted) return conn.reply(m.chat, `❕ *ضع منشن للمشرف*\n\nمثال, !خفض @منشن\n!خفض *الرد على رسالة*`, m, fake, )
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `❕ *رقم غير صحيح*`, m, fake, )
  
try {
if (text) {
var user = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
var user = m.quoted.sender
} else if (m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.reply(m.chat, `🪔 *لـم تـكـن مُـشـرف كـمـا تـوقـعـنـا*`, m, fake, )
}

}
handler.help = ['demote']
handler.tags = ['grupo']
handler.command = ['خفض', 'تخفيض']

handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
