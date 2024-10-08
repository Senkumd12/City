const xpperlimit = 2000;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^شراء/i, '');
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌─「 الدفع 」
⌯ الكمية : + ${count} 💎 
⌯ اكسبي : -${xpperlimit * count} XP
└──────────────`, m);
  } else conn.reply(m.chat, `[❣️]~ ليس لديك خبرة لتشتري ${count} ماس 💎`, m);
return conn.sendMessage(m.chat, {
react: {
  text: '💎',
  key: m.key,
}})
};
handler.help = ['V I O L E T'];
handler.tags = ['V I O L E T'];
handler.command = ['شراء', 'شراءالكل'];

handler.disabled = false;

export default handler;
