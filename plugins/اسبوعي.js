const free = 25
const prem = 15
let handler = async (m, { conn, isPrems }) => {
    let exp = `${pickRandom([500, 600, 700, 800, 900, 999, 1000, 1300, 1500, 1800])}` * 1 * 7 // تضاعف المكافأة لسبع مرات
    let exppremium = `${pickRandom([1000, 1500, 1800, 2100, 2500, 2900, 3300, 3600, 4000, 4500])}` * 1 * 7 // تضاعف المكافأة لسبع مرات
    let d = Math.floor(Math.random() * 30) * 7 // تضاعف الماس لسبع مرات
    let time = global.db.data.users[m.sender].lastclaim + 604800000 // أسبوع واحد (7 أيام * 24 ساعة * 60 دقيقة * 60 ثانية * 1000 مللي ثانية)
    if (new Date - global.db.data.users[m.sender].lastclaim < 604800000) throw `*🕚 أعود بعد ${msToTime(time - new Date())}* `
    global.db.data.users[m.sender].exp += isPrems ? exppremium : exp
    global.db.data.users[m.sender].diamond += d
    m.reply(`🎁 *مكافأة الأسبوعية*

*✒ لقد تلقيت:*
🆙 *اكسبي* : +${isPrems ? exppremium : exp}
💎 *الماس* : +${d}`)
    global.db.data.users[m.sender].lastclaim = new Date * 1
}

handler.help = ['weekly']
handler.tags = ['rg']
handler.command = ['أسبوعي', 'claimweekly'] // تغيير الأوامر لتكون للأسبوعية

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        days = Math.floor(duration / (1000 * 60 * 60 * 24))

    days = (days < 10) ? "0" + days : days
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return days + " أيام " + hours + " ساعات " + minutes + " دقائق " + seconds + " ثواني"
}
