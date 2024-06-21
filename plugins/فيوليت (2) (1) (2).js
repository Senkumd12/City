import fetch from 'node-fetch';

const rwait = '⏳'; // تعريف متغير rwait
const done = '✅'; // تعريف متغير done

const handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `⟣⟤ 🖤⚡\nادخل السؤال أو المعلومة التي تريد من فيوليت أن ترد عليها\n*⟣⟤ مثال*\n⟣⟤ .فيوليت اعطيني معنى اسم فيوليت\n\n⟣⟤ .فيوليت اعطيني نصائح`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  const fgytSrdf = 'https://telegra.ph/file/65f8f42c0a9435ff4f125.jpg'; // تعريف fgytSrdf باستخدام const

  try {
    await m.react(rwait);
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: fgytSrdf },
      caption: '_انــتــظــر رد ڤــيــولــيــت . . ._'
    }, { quoted: m });

    conn.sendPresenceUpdate('composing', m.chat);

    try {
      const result = await CleanDx(text);

      // تعديل الرسالة الأصلية باستخدام الميثود relayMessage
      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: `${result}` } // إضافة النتيجة في التعليق
          }
        }
      }, {});

      m.react(done);
    } catch (e) {
      console.error('Error processing the query:', e);
      await m.reply('حدث خطأ أثناء معالجة الاستفسار');
    }
  } catch (err) {
    console.error('Error:', err);
    await m.reply('حدث خطأ أثناء معالجة الاستفسار');
  }
};

handler.help = ["cleandx"];
handler.tags = ["internet"];
handler.command = /^فيوليت/i; // تعريف النمط الصحيح للأمر

export default handler;

async function CleanDx(your_qus) {
  const linkaiList = [];
  const linkaiId = generateRandomString(21);
  const Baseurl = "https://vipcleandx.xyz/";

  console.log(formatTime());

  linkaiList.push({
    "content": your_qus,
    "role": "user",
    "nickname": "VIOTER",
    "time": formatTime(),
    "isMe": true
  });

  linkaiList.push({
    "role": "assistant",
    "nickname": "VIOTER AI",
    "time": formatTime(),
    "isMe": false
  });

  if (linkaiList.length > 10) {
    linkaiList.shift();
  }

  const response = await fetch(Baseurl + "v1/chat/gpt/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": generateRandomIP(),
      "Referer": Baseurl,
      "accept": "application/json, text/plain, */*"
    },
    body: JSON.stringify({
      "list": linkaiList,
      "id": linkaiId,
      "title": your_qus,
      "prompt": "",
      "temperature": 0.5,
      "models": "0",
      "continuous": true
    })
  });

  const data = await response.text();

  return data;
}

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

function generateRandomIP() {
  const ipParts = [];
  for (let i = 0; i < 4; i++) {
    const randomPart = Math.floor(Math.random() * 256);
    ipParts.push(randomPart);
  }
  return ipParts.join('.');
}

function formatTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
