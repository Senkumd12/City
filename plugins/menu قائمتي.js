let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/efae9c60dc1250b145a3f.jpg'
  let { name } = global.db.data.users[who]
  m.react('👑')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
*【..≼قــســم المطور≽..】*
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘بان〙*
*📖🕯⤺┇〘بانفك〙*
*📖🕯⤺┇〘بانشات〙*
*📖🕯⤺┇〘بانشاتفك〙*
*📖🕯⤺┇〘حطهابروفايل〙*
*📖🕯⤺┇〘ضيفالماس〙*
*📖🕯⤺┇〘ضيفاكسبي〙*
*📖🕯⤺┇〘اعاده〙*
*📖🕯⤺┇〘اخرج〙*
*📖🕯⤺┇〘ادخل〙*
*📖🕯⤺┇〘تهكير〙*
*📖🕯⤺┇〘تنظيف〙*
*📖🕯⤺┇〘الامردا〙*
*📖🕯⤺┇〘البلوكات〙*
*📖🕯⤺┇〘فكالبلوك〙*
*📖🕯⤺┇〘بلوك〙*
*📖🕯⤺┇〘بريم〙*
*📖🕯⤺┇〘حذف_بريم〙*
*📖🕯⤺┇〘المميزين〙*
*📖🕯⤺┇〘تسريع〙*
*📖🕯⤺┇〘نشر〙*
*📖🕯⤺┇〘اعدام〙*
*📖🕯⤺┇〘ملف〙*
                    ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
`
  conn.sendMessage(m.chat, {
    image: { url: imageUrl }, 
    caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['10']
handler.rowner = true
export default handler
