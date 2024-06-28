let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/f1334b3a8c962d9fa5b90.png'
  let { name } = global.db.data.users[who]
m.react('📥')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
*【..≼قــســم التحميلات≽..】*
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

*📖🕯⤺┇〘فيديو〙*
*📖🕯⤺┇〘صوت〙*
*📖🕯⤺┇〘شغل〙*
*📖🕯⤺┇〘صورة〙*
*📖🕯⤺┇〘بحث〙*
*📖🕯⤺┇〘تيك〙*
*📖🕯⤺┇〘تيك_صور〙*
*📖🕯⤺┇〘يوتيوب〙*
*📖🕯⤺┇〘فيس〙*
*📖🕯⤺┇〘انستا〙*
*📖🕯⤺┇〘تطبيق〙*
*📖🕯⤺┇〘جيف〙*
*📖🕯⤺┇〘جوجل〙*
*📖🕯⤺┇〘تويتر〙*
*📖🕯⤺┇〘فيلم〙*
                    ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
`
  conn.sendMessage(m.chat, {
    image: { url: imageUrl }, 
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['9']

export default handler
