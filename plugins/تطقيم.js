import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  //قناتي هتفيدك
//https://whatsapp.com/channel/0029VaQ12JyLY6d1PdN5r93a
//رقمي 967733707084


  let data = await (await fetch('https://raw.githubusercontent.com/Afghhjjkoo/GURU-BOT/main/lib/%D8%B7%D9%82%D9%85%20%D8%AD%D8%A8.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]

  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', 'ا╰━⧠━──━⧈⇓《🌸𝐇𝐔 𝐓𝐀𝐎🌸》⇓⧈━─━⧠', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', 'ا╰━⧠━──━⧈⇓《🌸𝐇𝐔 𝐓𝐀𝐎🌸》⇓⧈━─━⧠', m)
}
handler.help = ['Miku bot']
handler.tags = ['Miku bot']
handler.command = /^طقم|تطقيم$/i
handler.limit = true

export default handle
