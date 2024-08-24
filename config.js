import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['212658594530', '🌩️ ẉa.me/𝓧senku𝓧‖.peị!‽ 👑', true], 
 ['201153263863', '🌩️ ẉa.me/𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧‖.peị!‽ 👑', false],  ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '+212626817129' //Ejemplo: +201153263863
global.confirmCode = ''

global.animxscans = ['212658594530']
global.suittag = ['212658594530']
global.mods = []
global.prems = []

global.packname = '『 حقوق عمك سينكَو 』'
global.author = '『 سينكو بــــوت 』'
global.wm = '『سينكو بــــوت 』'
global.wm2 = '『 سينكو بــــوت 』'
global.azami = '『سينكو بــــوت 』'
global.cb = '『 سينكو بــــوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© 𝓧senku𝓧'
global.devnum = '21265854530'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
