const gameStates = {};

const startGame = (chatId) => {
  return {
    randomNumber: Math.floor(Math.random() * 100) + 1,
    tries: 0,
    maxTries: 5, // خمس محاولات لكل من المميز والعادي
  };
};

let handler = async (m, { conn, text }) => {
  const chatId = m.chat;

  // بدء لعبة جديدة إذا لم تكن هناك لعبة نشطة
  if (!gameStates[chatId]) {
    gameStates[chatId] = startGame(chatId);
    conn.reply(chatId, "اختر رقمًا بين 1 و 100. حاول تخمينه! لديك " + gameStates[chatId].maxTries + " محاولات.", m);
  }

  const gameState = gameStates[chatId];
  if (gameState.tries >= gameState.maxTries) {
    conn.reply(chatId, `لقد نفدت محاولاتك! كان الرقم ${gameState.randomNumber} 😭💔`, m);
    delete gameStates[chatId]; // إنهاء اللعبة
    return;
  }

  const guess = parseInt(text);
  if (!isNaN(guess)) {
    gameState.tries++;
    if (guess === gameState.randomNumber) {
      conn.reply(chatId, `تهانينا! لقد خمنت الرقم بشكل صحيح. الرقم هو ${gameState.randomNumber} بدأت أعجب بك 🤭✨`, m);
      if (m.sender.startsWith('90')) { // المميز
        global.db.data.users[m.sender].exp += 9999;
        conn.reply(chatId, `تهانينا! لقد فزت وحصلت على 9999 نقطة خبرة.`, m);
      } else { // العادي
        global.db.data.users[m.sender].exp += 4999;
        conn.reply(chatId, `تهانينا! لقد فزت وحصلت على 4999 نقطة خبرة.`, m);
      }
      delete gameStates[chatId]; // إنهاء اللعبة
    } else if (guess < gameState.randomNumber) {
      conn.reply(chatId, "❌ أكبر من ذلك. حاول مرة أخرى!", m);
    } else if (guess > gameState.randomNumber) {
      conn.reply(chatId, "❌ أصغر من ذلك. حاول مرة أخرى!", m);
    }
  }
};

handler.command = ['تخمين'];
export default handler;
