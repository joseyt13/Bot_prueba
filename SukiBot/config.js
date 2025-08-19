import { watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import { fileURLToPath} from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

// 🌸 COLABORADORES Y CREADORES
global.owner = [
  ['5491156178758', '🍁 Creador fedexyz', true],
  ['573001533523', '✨️ Colaborador Brayans', true],
  ['5491176429275', '🍂 SukiBot', true],
];

// ✨️ NÚMEROS DE OWNER
global.mods = ['5491156178758', '573001533523'];
global.suittag = [...global.mods];
global.prems = ['5491156178758'];

// 🍁 INFORMACIÓN DEL BOT
global.libreria = 'Baileys';
global.nameqr = 'SukiBot';
global.namebot = 'SukiBot';
global.sessions = 'Sessions';
global.jadi = 'JadiBots';
global.sukiJadibts = true;

// 🗞️ MARCA DE AGUA
global.packname = 'Sᴜᴋɪ𝐁𝐨𝐭_MD (𝗠𝘂𝗹𝘁𝗶-𝗗𝗲𝘃𝗶𝗰𝗲)';
global.botname = '🎄 Sᴜᴋɪ𝐁𝐨𝐭_MD 🎋';
global.wm = global.botname;
global.dev = '୧ ꜰᴇᴅᴇxʏᴢㅤ🎋';
global.textbot = `${global.botname} 𝐁ᥡ ꜰᴇᴅᴇxʏᴢ`;
global.etiqueta = `${global.botname} mᥙᥣ𝗍і-ძᥱ᥎іᥴᥱ`;

// 💸 MONEDA
global.moneda = 'Sukiconis 💲';

// 🎨 ESTILO DE MENÚ
global.namabot = '⫹⫺ ᴍᴅ';
global.v = '-';
global.eror = '_Hubo un error_';
global.lopr = '🅟';
global.lolm = 'Ⓛ';
global.dmenut = '✦ ───『';
global.dmenub = '│➭';
global.dmenub2 = '│乂';
global.dmenuf = '╰━━━━━━━━┈─◂';
global.cmenut = '⫹⫺ ───『';
global.cmenuh = '』─── ⬟';
global.cmenub = '│〆';
global.cmenuf = '╰━━━━━━━━┈─◂';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dashmenu = '✧────···[ *Dashboard* ]···────✧';
global.htki = '––––––『';
global.htka = '』––––––';
global.htjava = '⫹⫺';
global.comienzo = '• • ◕◕════';
global.fin = ' • •';

// 📥 IMÁGENES
global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.photoSity = [global.catalogo];

// 🗂️ GRUPOS Y CANALES
global.gp1 = 'https://chat.whatsapp.com/FoVnxJ64gYV6EZcfNVQUfJ';
global.channel2 = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W';
global.md = 'https://github.com/El-brayan502/RoxyBot-MD';
global.correo = 'brayanfree881@gmail.com';
global.cn = 'https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m';

// 🧾 MENSAJE DE ESTILO
global.estilo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
...(false? { remoteJid: '5219992095479-1625305606@g.us'}: {}),
},
  message: {
    orderMessage: {
      itemCount: -999999,
      status: 1,
      surface: 1,
      message: global.packname,
      orderTitle: 'Bang',
      thumbnail: global.catalogo,
      sellerJid: '0@s.whatsapp.net',
},
},
};

// 📰 CANALES
global.ch = {
  ch1: '120363312092804854@newsletter',
};

// 🔐 CLAVES API
global.MyApiRestBaseUrl = 'https://api.cafirexos.com';
global.MyApiRestApikey = 'BrunoSobrino';
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';

global.keysZens = [
  'LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124',
  'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'
];
global.keysxxx = global.keysZens[Math.floor(Math.random() * global.keysZens.length)];

global.keysxteammm = [
  '29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb',
  '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'
];
global.keysxteam = global.keysxteammm[Math.floor(Math.random() * global.keysxteammm.length)];

global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = global.keysneoxrrr[Math.floor(Math.random() * global.keysneoxrrr.length)];

global.lolkeysapi = ['kurumi'];
global.itsrose = ['4b146102c4d500809da9d1ff'];

// 🔄 AUTO-RELOAD
const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("🔄 Se actualizó 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
