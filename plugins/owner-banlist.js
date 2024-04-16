const handler = async (m, {conn, isOwner}) => {
  const chats = Object.entries(global.db.data.chats).filter((chat) => chat[1].isBanned);
  const users = Object.entries(global.db.data.users).filter((user) => user[1].banned);
  const userCaption = users.length > 0 ? users.map(([jid], i) => `${isOwner ? '@' + jid.split`@`[0] : jid}`).join('\n') : '';
  const chatCaption = chats.length > 0 ? chats.map(([jid], i) => `${isOwner ? '@' + jid.split`@`[0] : jid}`).join('\n') : '';

  const caption = `
┌〔 المحظورين المستخدمون 〕
├ العدد : ${users.length} 
├ ${userCaption}
└────

┌〔 المحظورين في المحادثات 〕
├ العدد : ${chats.length} 
├ ${chatCaption}
└────
`.trim();
  m.reply(caption, null, {mentions: conn.parseMention(caption)});
};

handler.command = /^banlist(ned)?|ban(ned)?list|المحظورين$/i;
handler.rowner = true;

export default handler;