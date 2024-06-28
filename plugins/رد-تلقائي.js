let handler = m => m;

handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];
    let responses;
    
    if (/^السلام عليكم+/i.test(m.text)) {
        responses = ['وعليكم السلام ورحمة الله وبركاته'];
    } else if (/^ضع النص$/i.test(m.text)) {
        responses = ['ضع الرد'];
    }

    if (responses) {
        let randomIndex = Math.floor(Math.random() * responses.length);
        conn.reply(m.chat, responses[randomIndex], m);
    }

    return !0;
};

export default handler;
