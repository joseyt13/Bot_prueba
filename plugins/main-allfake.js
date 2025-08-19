import pkg from '@whiskeysockets/baileys';
import fs from 'fs';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import getMensajeSistema from '../lib/msmwarning.js';

const { generateWAMessageFromContent, prepareWAMessageMedia, proto} = pkg;

var handler = m => m;
handler.all = async function (m, { conn}) {

  // Buffer de imágenes
  global.getBuffer = async function getBuffer(url, options = {}) {
    try {
      const res = await axios({
        method: 'get',
        url,
        headers: {
          'DNT': 1,
          'User-Agent': 'GoogleBot',
          'Upgrade-Insecure-Request': 1
},
...options,
        responseType: 'arraybuffer'
});
      return res.data;
} catch (e) {
      console.log(`Error: ${e}`);
}
};

  // Información del bot
  global.creador = 'Wa.me/5491156178758';
  global.ofcbot = `Wa.me/${conn.user.jid.split('@')[0]}?text=✨️hl`;
  global.asistencia = 'Wa.me/5491176429275';
  global.namechannel = '🍒 Sᴜᴋɪ𝐁𝐨𝐭_MD 🍁';
  global.namechannel2 = '🍒 Sᴜᴋɪ𝐁𝐨𝐭_MD 🍁';
  global.namegrupo = '🍒 Sᴜᴋɪ𝐁𝐨𝐭_MD 🍁';
  global.namecomu = '⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝖿ᥱძᥱ᥊ᥡz';
  global.listo = 'listo aquí tienes tu pedido 🍁';
  global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(() => catalogo);

  // Canales
  global.idchannel = '120363402097425674@newsletter';
  global.canalIdM = [idchannel, idchannel];
  global.canalNombreM = [namechannel, '🍁 Sᴜᴋɪ 🍀'];
  global.channelRD = await getRandomChannel();

  // Mensajes del sistema
  global.mensajes = getMensajeSistema();

  // Fecha y hora
  const d = new Date(Date.now() + 3600000);
  global.d = d;
  global.locale = 'es';
  global.dia = d.toLocaleDateString(locale, { weekday: 'long'});
  global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric'});
  global.mes = d.toLocaleDateString('es', { month: 'long'});
  global.año = d.toLocaleDateString('es', { year: 'numeric'});
  global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

  // Reacciones globales
  global.rwait = '✨️';
  global.done = '✅';
  global.error = '✖️';
  global.msm = '⚠️';

  // Emojis
  const emojis = [
    '૮₍ ˶•⤙•˶ ₎ა ✨️',
    '૮₍ ˶•⤙•˶ ₎ა ✨️',
    '૮₍ ˶•⤙•˶ ₎ა ✨️',
    '૮₍ ˶•⤙•˶ ₎ა ✨️',
    '૮₍ ˶•⤙•˶ ₎ა ✨️'
  ];
  global.emoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Mensajes de espera
  global.wait = '🌸 𝗧𝗘 𝗣𝗜𝗗𝗢 𝗤𝗨𝗘 𝗠𝗘 𝗘𝗦𝗣𝗘𝗥𝗘𝗦 ʕ•ᴥ•ʔ';
  global.waitt = global.wait;
  global.waittt = global.wait;
  global.waitttt = global.wait;

  // Datos aleatorios
  global.edadaleatoria = ['10', '28', '20', '40', '18', '21', '15', '11', '9', '17', '25'].getRandom();
  global.user2 = m.pushName || 'Anónimo';
  global.verifyaleatorio = ['registrar', 'reg', 'verificar', 'verify', 'register'].getRandom();

  // Enlaces globales
  const canal = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W';
  const git = 'https://github.com/El-brayan502';
  const github = 'https://github.com/El-brayan502/RoxyBot-MD';
  global.redes = [canal, canal, git, github].getRandom();

  // Imagen aleatoria
  const category = 'imagen';
  const db = './src/database/db.json';
  const db_ = JSON.parse(fs.readFileSync(db));
  const randomlink = db_.links[category][Math.floor(Math.random() * db_.links[category].length)];
  const response = await fetch(randomlink);
  global.icons = await response.arrayBuffer();

  // Saludo RPG por hora
  const hour = new Date().getHours();
  const saludos = {
    noche: 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃',
    mañana: 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄',
    dia: 'Lɪɴᴅᴏ Dɪᴀ 🌤',
    tarde: 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'
};
  global.saludo = hour < 3? saludos.noche:
                   hour < 7? saludos.mañana:
                   hour < 13? saludos.dia:
                   hour < 18? saludos.tarde: saludos.noche;

  // Tags
  global.nombre = m.pushName || 'Anónimo';
  global.taguser = '@' + m.sender.split('@')[0];
  global.readMore = String.fromCharCode(8206).repeat(850);

  // Fake contacto
  let pp = null;
  try {
    pp = await conn.profilePictureUrl('5491156178758@s.whatsapp.net', 'image');
} catch (e) {}
  global.fkontak = {
    key: {
      participant: '0@s.whatsapp.net',
...(m.chat? { remoteJid: '120363402481697721@g.us'}: {})
},
    message: {
      contactMessage: {
        displayName: 'fedexyz owner 🍁',
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;fedexyz owner🍁;;;\nFN:DevBrayan creador\nitem1.TEL;waid=5491156178758:5491156178758\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        jpegThumbnail: pp? await (await fetch(pp)).buffer(): null,
        thumbnail: null,
        sendEphemeral: true
}
}
};

  // Fake canal
  const iconos = [
    'https://files.catbox.moe/rkvuzb.jpg',
    'https://files.catbox.moe/3ngnnn.jpg',
    'https://files.catbox.moe/07fyj3.jpg',
    'https://files.catbox.moe/erkz66.jpg'
  ];
  global.icono = iconos[Math.floor(Math.random() * iconos.length)];

  global.rcanal = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        serverMessageId: 100
},
      externalAdReply: {
        showAdAttribution: true,
        title: textbot,
        body: dev,
        mediaUrl: null,
        description: null,
        previewType: 'PHOTO',
        thumbnailUrl: icono,
        sourceUrl: redes,
        mediaType: 1,
        renderLargerThumbnail: false
}
}
};
};

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function getRandomChannel() {
  const index = Math.floor(Math.random() * canalIdM.length);
  return { id: canalIdM[index], name: canalNombreM[index]};
}
