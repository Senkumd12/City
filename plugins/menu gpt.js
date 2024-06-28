let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/2110a284535ab4c621e4f.jpg'
  let { name } = global.db.data.users[who]
  m.react('🤖')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
【..≼قــســم الذكاء الاصطناعي≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘فيوليت〙*
*📖🕯⤺┇〘بارد〙*
*📖🕯⤺┇〘نانو〙*
*📖🕯⤺┇〘بوت〙*
*📖🕯⤺┇〘شوف〙*
*📖🕯⤺┇〘شادو〙*
*📖🕯⤺┇〘تست〙*
*📖🕯⤺┇〘دحيح〙*
*📖🕯⤺┇〘بلاك〙*
*📖🕯⤺┇〘ديكس〙*
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
handler.command = ['2']

export default handler
