let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/9c688b13f62da28cd9bbc.png'
  let { name } = global.db.data.users[who]
  m.react('♻️')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
*【..≼قــســم التحويلات≽..】*
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

*📖🕯⤺┇〘ملصق〙*
*📖🕯⤺┇〘حقوق〙*
*📖🕯⤺┇〘لصورة〙*
*📖🕯⤺┇〘لفيديو〙*
*📖🕯⤺┇〘دمج〙*
*📖🕯⤺┇〘تليجراف〙*
*📖🕯⤺┇〘تيلجرام〙*
*📖🕯⤺┇〘ستك〙*
*📖🕯⤺┇〘نرد〙*
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
handler.command = ['8']
export default handler
