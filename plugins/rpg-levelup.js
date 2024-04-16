import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `╭━⧠━─━⧈⇓《🌸المستوى🌸》⇓⧈─━⧠
*✧║🌸الاسم*
✧║${name}
✧║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*✧║🌸المستوى الحالي: ${user.level}*
✧║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*✧║🌸الرتبه:* *${user.role}*
✧║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*✧║🌸رصيدك:* *${user.exp - min}/${xp}*
✧║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃🌸أنت تحتاج الى ${max - user.exp} XP لرفع المستوى*
ا╰━⧠━─━⧈⇓《🌸𝑯𝑼 𝑻𝑨𝑶_𝑩𝑶𝑻🌸》⇓⧈─━⧠`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 عاش يحب ${conn.getName(m.sender)}    المستوي:`
        let str = `❂ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
•┃❖مبروك المستوى الجديد☔ 

•┃❖ ${user.level}

•┃❖الرتبـه: *${user.role}*

•┃❖لتعطيل الميزه
/off autolevelup
⌞ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['لفل', 'lvl', 'levelup', 'مستواي', 'مستوا'] 

export default handler
  