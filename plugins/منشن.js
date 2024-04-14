let handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
    }
    let groupname = await conn.getName(m.chat)
    let membercount = participants.length
    let oi1 = `*⬤🦂╎ جـروب : ○${groupname}*`
    let oi2 = `*⬤🦂╎ الاعـضـاء : ○${membercount}*`
    let teks = `*منشن جماعي✨🦋*\n${oi1}\n${oi2}\n\n*🦂┇الجروب :⇣*\n`
    for (let mem of participants) {
        teks += `*◯🍒╎* @${mem.id.split('@')[0]}\n`
    }
    teks += `*▌│█║▌║▌║║▌║▌║▌║█*\n*乂❄️𝐀𝐍𝐆𝐄𝐋𝐎🧿乂*`
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}
handler.help = ['tagall <mesaje>', 'invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
