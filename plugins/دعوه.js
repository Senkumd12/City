export async function all(m) {
// عندما يرسل شخص ما رابط مجموعة إلى رسائل الخاصة للبوت/
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {

m.reply(`> *دعوة للبوت*

> مرحباً
> شروط البوت، يكون عندك فوق 70 عضو او تكون من ضمن مملكة كبيرة.
> الشرط الثاني والثالث: البوت يكون معاه ادمن ، عدم استعمال البوت فيما حرمه الله.
*رقم المطور: https://wa.me/+201153263863*
`)
m.react('💎')
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}

return !0
}
