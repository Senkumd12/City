let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/e65e861592e120b4c51f8.png'
  let { name } = global.db.data.users[who]
  m.react('⚙️')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
*【..≼قــســم الادوات≽..】*
                   ⋄━───═◞⬪⋇⬪◟═───━⋄


*📖🕯⤺┇〘لرابط〙*
*📖🕯⤺┇〘باركود〙*
*📖🕯⤺┇〘ترجم〙*
*📖🕯⤺┇〘فضح〙*
*📖🕯⤺┇〘تكرار〙*
*📖🕯⤺┇〘بريد〙*
*📖🕯⤺┇〘قص〙*
*📖🕯⤺┇〘احسب〙*
*📖🕯⤺┇〘جودة〙*
*📖🕯⤺┇〘واتس〙*
*📖🕯⤺┇〘مطلوب〙*
                    ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['6']

export default handler
