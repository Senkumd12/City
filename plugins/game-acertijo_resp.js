import similarity from 'similarity';
import fs from 'fs';
import acertijoHandler from './game-acertijo.js'; // استخدام المسار النسبي الصحيح

const threshold = 0.72;
const handler = (m) => m;

handler.before = async function(m) {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.game_acertijo_resp;

  const id = m.chat;
  this.tekateki = this.tekateki || {};
  if (!(id in this.tekateki)) return;

  const json = this.tekateki[id][1];
  const startTime = this.tekateki[id][4]; // وقت بدء السؤال
  const endTime = new Date().getTime();
  const duration = ((endTime - startTime) / 1000).toFixed(2); // المدة بالثواني مع تقريب عشريين

  if (m.text.toLowerCase() === json.response.toLowerCase().trim()) {
    global.db.data.users[m.sender].exp += this.tekateki[id][2];
    m.reply(`إجابة صحيحة\n+${this.tekateki[id][2]} اكسبي\nالمدة: ${duration} ثانية`);
    clearTimeout(this.tekateki[id][3]);
    delete this.tekateki[id];

    // استدعاء الكود الأول لإرسال سؤال جديد
    await acertijoHandler(m, { conn: this, usedPrefix: '' });
  } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) {
    m.reply(tradutor.texto3);
  }

  return !0;
};

// تعديل وقت بدء السؤال عند إنشائه
handler.initQuestion = function(chatId, question, reward) {
  this.tekateki = this.tekateki || {};
  const startTime = new Date().getTime();
  this.tekateki[chatId] = [
    question,
    { response: question.answer },
    reward,
    setTimeout(() => delete this.tekateki[chatId], 60000), // يمكنك تغيير المدة هنا
    startTime // تسجيل وقت بدء السؤال
  ];
};

handler.exp = 0;
export default handler;
