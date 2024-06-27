import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  let caption = `
*「 البقرة: 255 - آية الكرسي 」*
﴾ ا للَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴿ 

`.trim();
  let imageUrl = 'https://telegra.ph/file/8a2b85a874770f50cccb4.jpg';
  
  await conn.sendFile(m.chat, imageUrl, 'ayatkursi.jpg', caption, m);
}

handler.help = ['ayatkursi'];
handler.tags = ['quran'];
handler.command = /^(اية الكرسي)$/i;

export default handler;
