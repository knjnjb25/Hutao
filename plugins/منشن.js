let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
    }
    // تعريف المتغيرات بالشكل الصحيح
    let groupname = conn.getName(m.chat)
    let membercount = participants.length
    let oi1 = `*⬤🦂╎ جـروب : *○'${groupname}'*`
    let oi2 = `⬤🦂╎ الاعـضـاء : *○'${membercount}'*`
    let teks = `*منش👾 🌸 جماعي* \n\n ${oi1}\n${oi2}\n\n*🌿┇الجروب :⇣*\n`
    for (let mem of participants) {
        teks += `*◯🍒╎* @${mem.id.split('@')[0]}\n`
    }
    teks += `*𝑯𝑼 𝑻𝑨𝑶_𝑩𝑶𝑻*\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
