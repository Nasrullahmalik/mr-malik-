import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*< Google - BARD />*_\n\n*[ ℹ️ ] Type something.*\n\n*[ 💡 ] Example:* _${usedPrefix + command} Hello Bard_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      Throw '_*<ia - bard />*_ \ n \ n*[ℹ️] could not obtain a valid response.*';
        }
  } catch (error) {
    Throw '_*<ia - bard />*_ \ n \ n*[ℹ️] could not obtain a valid response.*';
     }
};

handler.command = /^bard$/i;

export default handler;