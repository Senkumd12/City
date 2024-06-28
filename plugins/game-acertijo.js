import fs from 'fs';

const timeout = 10000;
const money = 1;

const handler = async (m, { conn, usedPrefix }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.game_acertijo;

  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  const id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, tradutor.texto1, conn.tekateki[id][0]);
    throw false;
  }
  const tekateki = tradutor.texto4;
  const json = tekateki[Math.floor(Math.random() * tekateki.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `
ⷮ \`〘 ${json.question} 〙\`
${tradutor.texto2[1]} +${money} روبل ⊰B⊱
`.trim();
  const startTime = new Date().getTime(); // تسجيل وقت بدء السؤال
  conn.tekateki[id] = [
    await conn.reply(m.chat, caption, m), json,
    money,
    setTimeout(async () => {
      if (conn.tekateki[id]) await conn.reply(m.chat, `${tradutor.texto3} ${json.response}`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout),
    startTime // إضافة وقت البدء هنا
  ]; 
};

handler.help = ['acertijo'];
handler.tags = ['game'];
handler.command = /^(acertijo|acert|pregunta|كت|tekateki)$/i;
export default handler;
