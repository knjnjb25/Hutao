//V E N O M @ D E L E T E D E L E T E D E L E T E #level [❗].... role(level)
// (['lurk'])
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "مسافر 🕊️", level: 0 }, { name: "مساعد🎇", level: 3 }, 
      { name: "فارس⚓", level: 4 }, { name: "ملك🃏", level: 6 }, 
      { name: "قمر سفلي🌑", level: 8 }, { name: "قمر علوي🌕", level: 12 }, 
      { name: "امبارطور🎴", level: 13 }, { name: "امبارطور🎴", level: 14 }, 
      { name: "تلميذ اديبتاي🪄", level: 16 }, { name: "اديبتاي💎", level: 20 }, 
      { name: "فاتوي☣️", level: 24 }, { name: "فاتوي ليدر🔰", level: 28 }, 
      { name: "مساعد اركون♠️", level: 32 }, { name: "اركون متدرب⚜️", level: 36 },
      { name: "اركون ❄️", level: 48 }, { name: "شيطان🥀⚰️", level: 52 }, 
      { name: "حاكم🍁", level: 56 }, { name: "كيان حاكم♦️", level: 60 }, 
      { name: "ملك الشياطين😈", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
      }
  