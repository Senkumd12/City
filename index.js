console.log('🚀 Iniciando...')
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts'
import { createInterface } from 'readline'
import yargs from 'yargs'

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Bring in the ability to create the 'require' method
const { name, author } = require(join(__dirname, './package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('Curiosity\nBot\nMD', {
font: 'block',
align: 'center',
colors: ['magenta', 'cyan']
})
say(`Bot: ${name}\nVersion: 1.0.5\nCreador: Azami ~ Zam\nNumero: +52 1 729 488 8993\nEmail: thecuriositybot@gmail.com`, {
font: 'console',
gradient: ['blue', 'magenta']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]
say([process.argv[0], ...args].join(' '), {
font: 'console',
align: 'center',
gradient: ['blue', 'magenta']
})
setupMaster({
exec: args[0],
args: args.slice(1),
})
let p = fork()
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}
})
p.on('exit', (_, code) => {
isRunning = false
console.error('⚠️ Ocurrió un error inesperado:', code)
if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)
})
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())
})
}


{
  "type": "service_account",
  "project_id": "vioter2violet",
  "private_key_id": "1fff8699f18bcdae16b5e76b1c3077ff18deddf7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCx5rkcAFUlKat2\nhzW1SrBM1xkxuuwuy+movp84Aqhrw5JPwEE8Aa/8+Sdyx02mbIsHTEKnyGmEoCHL\n2C/i4oq0MFEr67IDEizKpcFg0yZqdDPM7RHds5cL/NsMZ4Zn2dy9KbhKxKxyKbXo\nzNNZ/s/YcU/4rAm+pj2b5dV55wTEahe6wtgTaZbJYsJD15RW5MAJO9UvPj0u68hL\nJ1I071vGp1r7vK0ms2+2ASPLU13ISKV0D402JGmppYcOgDzFbxtAFM8XVOxzzmwL\njP286At+7WQ7ofG3L2g1kd0GQPCTMPoyUMP6aQ/i2saE8QxPX+U+jZGcgtaX0vHZ\nUUJDacqXAgMBAAECggEAHZBVFMUtYSaimujvUPhfgfWA91Wz6Db01pkPBpTSfk4a\n42v0q08wet7A4n8idVS2afkPXqiceHDQDPsZQiAZosYgxya9B2uey/Jtx3RvfuNe\ntGB1Rp2QrWpQ0KfnmxyGZV0ohixW6AXseAqJ2PvSeIqkGpQkbm1b8atpJX/xt94N\n4vx8Y3hEAltAqLGp7EAlfjshCsw/oUeJJxnk6A3XTehAILKfd5yHnWhwrtPcXK/i\nvFGPb5X8CxN8b2qtnE0rYEk/fUK4ZU9JBQntgt3hZAMCK4RoscbjVRbByAuXN6m6\nXnRc79tOYJSaYrW8EbS8e6LTsQDWHGHfm5uNqSzVsQKBgQD4Ss0nmwzo9F4NAGZS\nuFW0L2zsEUOvhvzWwNuqAomQyu5nsdiJCQMBp3Kzkp8TLk2VCmWRVk1RAchgYONj\n6L8g0JVJ+vErpVg3kLtV7/Ip4C5YZFH4fgOEFHFND2ALPFw09Njegpl6JWXL9tMu\nI0uSYBAfM6ayWiWDdo++CwSeTwKBgQC3bITmgrx0CmTAdBFoyCN9j/BaTGtGwCPq\nQxKDvaao+f5Wk+SPb+99gGSYnxUDP7yZhDHmOOSq9BSKuHI1DTtTyxW/9QNFQpZO\nVA80LmHWMuqfF3IZR9lKKv9aGBVOqXpwARy1cNj1Sw4weEDrg1ZAqr8vPAWyZd9b\nf9ok40UFOQKBgHJig4DrfVcUvP9gX8NcCJ+p+ZQHoBcNKQ4Gayw3XwjFdG9xD0CS\nVkA81CrGMWK0wikXURNTnuri110PRbKRVvvXG++pG9HvqmRu2N8OW5HPJYqzLNA9\nvYDrqgbGPojulcwPwJlBsVMER5FfdIqc2APnHYZCVVl1DjMyO6ZhjQ8hAoGAZ+Ex\ns0q/aAiq3sPdSDZwwx/Nw5Yb+0m+DWJHDg1OYcyTWn0PqJyASdd5IWaXA+wI5/iS\nOgxmlNr+90FWjO0deGs/uiMM4yC+90VsBuVty12yur8Qg3jJetO3IlMZXh9llCFN\nHQT4GpOTSagRPFB5fM420I1xvIMtaCiUZue/oyECgYEA5kccKbduWnPGjJfsnI3e\ne8AdR7ikpIDSvzOUGOHZGOOrVPK7jrdCCeb+eV8RQtO7gVFuAxPkJ2dBY/WiJfDK\nTGBwAufx4HhUPR1LevSUzSOVp2sHehJlUFq8cjZPHVvYVXkKwSx7wEQFGoQLqkol\nXapp3P/bJQ8CJfIoTkF95f0=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-oyd1s@vioter2violet.iam.gserviceaccount.com",
  "client_id": "103471949334344154672",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-oyd1s%40vioter2violet.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
