let handler = async (m, { command, text }) => m.reply(`•شروط الانضمام⇩
> ان تضم النقابة ستين عضو او اكثر .
> ان تضم النقابة خمس مشرفين او اكثر.
> وضع اسم الامبراطورية وليس المدينة بجانب اسم النقابة.
> توحيد روابط الإمبراطورية.
> ان لا يقل تفاعل النقابة عن 10k بالاسبوع.
> التعاون مع المدينة الامبراطورية بشكل عام.
> الالتزام بقوانين الإمبراطورية.
•مميزات المملكة
> حسبة اسبوعية
> نشر للنقابة عن طريق البوابة
> لوجو للنقابة
> استمارات وبنك
> موقع
> موسم اسبوعي مصغر للنقابات
> فيالق ومجلس بطولات ومتجر متطور ومتميز 
> سفر بين نقابات المملكة
> صحيفة لنشر كل اخبار المملكة والنقابات 
> عدم تدخل المملكة في شؤون النقابة وانظمتها الا في الاستثناءات 
> مواسم على مستوى الإمبراطورية ضد الممالك والنقابات الاخرى
> بوت مطور وبوت إستمارات خاص`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|33|استماره\استمارة)$/i

export default handler