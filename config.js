import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201153263863', '🌩️ ẉa.me/𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧‖.peị!‽ 👑', true], 
 ['201153263863', '🌩️ ẉa.me/𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧‖.peị!‽ 👑', true],  ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863'], ['201153263863']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +201153263863
global.confirmCode = ''

global.animxscans = ['201153263863']
global.suittag = ['201153263863']
global.mods = []
global.prems = []

global.packname = '『 201153263863 』'
global.author = '『 كـاسـبـر بــــوت 』'
global.wm = '『كـاسـبـر بــــوت 』'
global.wm2 = '『 كـاسـبـر بــــوت 』'
global.azami = '『كـاسـبـر بــــوت 』'
global.cb = '『 كـاسـبـر بــــوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧'
global.devnum = '201153263863'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
