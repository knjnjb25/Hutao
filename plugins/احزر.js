let handler = async(m, {
  conn,
  text,
  command
}) => {
  let yh = global.wp
  let url = yh[Math.floor(Math.random() * yh.length)]
  conn.sendMessage(m.chat, {
    image: {
      url: url
    },
    caption: "*من الشخصيه في الصوره..!🤔* \n *『💧┇HU TAO 𝙱𝙾𝚃』*"
  }, {
    quoted: m
  });
}
handler.command = /^(احزر|من_الشخصيه)$/i
handler.tags = ['anime']
handler.help = ['wp']
export default handler

global.wp = [
'https://telegra.ph/file/ddc6195a910c73f69a2aa.jpg',
'https://telegra.ph/file/4c0af411ef8558158ce89.jpg',
'https://telegra.ph/file/4240895a2944239a579fd.jpg',
'https://telegra.ph/file/2a7ed5c72528b8e5763ac.jpg',
'https://telegra.ph/file/9b7d466ca32a89be0f7f1.jpg',
'https://telegra.ph/file/96b660b5abd0d97024b17.jpg',
'https://telegra.ph/file/a888463197f337ea43d9d.jpg',
'https://telegra.ph/file/04dd49975b73103f6e785.jpg',
'https://telegra.ph/file/83c046d357294f8b1a9b1.jpg',
'https://telegra.ph/file/5ec7ea25e132d811cf35b.jpg',
'https://telegra.ph/file/5ec7ea25e132d811cf35b.jpg',
'https://telegra.ph/file/41dbd48050ab23431ffa8.jpg',
'https://telegra.ph/file/3e11bd8b982f995841dc8.jpg',
'https://telegra.ph/file/2c32af7ace0604b8c07e1.jpg',
'https://telegra.ph/file/148750efdaac4ef27c5ed.jpg',
'https://telegra.ph/file/637fa0d756404c1f4ea0a.jpg',
'https://telegra.ph/file/710bbc2eeca101a1d385c.jpg',
'https://telegra.ph/file/b3aae80616f9161fc6238.jpg',
'https://telegra.ph/file/7a2b17775004263b86e98.jpg',
'https://telegra.ph/file/e18f47ab68c21a7e13b6a.jpg',
'https://telegra.ph/file/c50286e1690caebd1f373.jpg',
'https://telegra.ph/file/ead7edac5f44ef11e5fcc.jpg',
'https://telegra.ph/file/a320a33743bbe06b06036.jpg',
'https://telegra.ph/file/fe95a31f39f32271b0560.jpg',
'https://telegra.ph/file/a12a80171f12f3526fe66.jpg',
'https://telegra.ph/file/804f660092611599c81ac.jpg',
'https://telegra.ph/file/65093639f515a4493a04c.jpg', 
'https://telegra.ph/file/d5df491eb40f2ba4d2e06.jpg',
'https://telegra.ph/file/83d090137354ed073ab29.jpg',
'https://telegra.ph/file/f070bb873b1dc6cb473e2.jpg',
'https://telegra.ph/file/3c8fb07c8461cb9ab2d42.jpg',
'https://telegra.ph/file/0cc3ce69435e896fc4745.jpg',
'https://telegra.ph/file/65d8975cc69a2c210bdc1.jpg',
'https://telegra.ph/file/2c2580db6c72e4f3c8133.jpg',
'https://telegra.ph/file/06b439c23bf2c15465c99.jpg',
'https://telegra.ph/file/826b5fd99e2a71b3ba106.jpg',
'https://telegra.ph/file/5ba5cef8022599cd599c5.jpg',
'https://telegra.ph/file/5de4b963565fe600bab3b.jpg',
'https://telegra.ph/file/30cbab6e00610acba32fd.jpg',
'https://telegra.ph/file/d4bbaea4857b3e254b778.jpg',
'https://telegra.ph/file/7fef2408e4df4c12cb113.jpg',
'https://telegra.ph/file/6e3003abb3663541f4ad5.jpg',
'https://telegra.ph/file/e82f85c11c2ac605627e8.jpg',
'https://telegra.ph/file/d8bbba561c85185f61198.jpg',
'https://telegra.ph/file/c63e0684ba53e880abd16.jpg',
'https://telegra.ph/file/b5979c8e34f8a672ac836.jpg',
'https://telegra.ph/file/8c444bba0febe2c335205.jpg',
'https://telegra.ph/file/aeb07baa96174ff204ee9.jpg',
'https://telegra.ph/file/e16134ccbd711bf5ab3e7.jpg',
'https://telegra.ph/file/a2c87cae15ee4b6c02584.jpg',
'https://telegra.ph/file/3e27f58153b8bb4cc106e.jpg',
]
