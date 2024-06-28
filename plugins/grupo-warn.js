const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'بدون سبب';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*[❕] قم بالرد علي رسالة او منشن المستخدم*\n\n*—◉ مثال:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
      } لقد تلقيت تحذيرا في الجروب!\nالسبب: ${sdms}\n*التحذيرات ${
        user.warn
      }/3*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (!bot.restrict) {
      return m.reply(
          '*[❕] الأمـر مُـعـطـل*',
      );
    }
    user.warn = 0;
    await m.reply(
        `تـم تـحـذيـرك أكـثـر مـن مـرة!!\n*@${
          who.split`@`[0]
        }* لقد تجاوزت *3* تـحـذيـرات، سـيـتـم طـردك 👽`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|انذار|تحذير|warn)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
