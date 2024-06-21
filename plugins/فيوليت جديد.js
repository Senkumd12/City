import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw ` *أدخل نصًا أو قم بالرد على رسالة بنص لاستخدام blackbox*\n\n⟣ *${usedPrefix + command}* ما هو افضل انمي\n⟣ *${usedPrefix + command}* give me a simple code for nodejs`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react(rwait);
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/65f8f42c0a9435ff4f125.jpg' },
      caption: '_انـتـظر رد فـيـوتـر . . ._'
    }, { quoted: m });
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const apiUrl = `https://aemt.me/bard?text=${prompt}`;

    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      let reply = data.result;

      if (!reply) {
        throw new Error('⚠️ حدثت مشكلة في الـAPI');
      }

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: `${reply}` } // تم إزالة التعليق هنا
          }
        }
      }, {});
      m.react(done);
    } catch (error) {
      console.error('Error from the API:', error);
    }

  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR*`;
  }
};

handler.help = ['chatgpt'];
handler.tags = ['AI'];
handler.command = ['فيوتر'];
export default handler;
