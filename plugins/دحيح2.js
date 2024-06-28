import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()

await m.reply(wait)

let media = await (uploader)(buffer)
let json = await (await fetch(`https://api-darkman-3cf8c6ef66b9.herokuapp.com/googlegenai?query=}`)).json()

conn.sendMessage(m.chat, { text: json.result }, { quoted: m })

} else throw `> ˼⚡˹↜ يــرجــي الـرد عــلــي الــصــورة الــتــي تــريــد تــوضــيــحــهــا\n\n> مــثــال\n${usedPrefix + command} اوصــف هــذه الــصــورة`

}
handler.help = ["S H A D O W"]
handler.tags = ['S H A D O W']
handler.command = /^(دحيح)$/i

handler.limit = true

export default handler
