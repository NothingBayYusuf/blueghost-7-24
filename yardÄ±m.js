const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {
    let kategoriEmbed = new Discord.RichEmbed()
    
      .setTitle("__KOMUTLAR__")
      .setThumbnail(message.author.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
                      "**b!eğlence** - Eğlence ve Kulanıcı komutlarını gösterir. \n" +
                      "**b!anakomutlar** - Ana komutları Gösterir. \n" +
                      "**b!yetkili** - Yetkili komutlarını gösterir. \n" +
                      "**b!müzik** - Müzik komutlarını gösterir. \n"
                     )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/q2HFAef) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=488354119908851712&scope=bot&permissions=401976383) | ")
    message.channel.send(kategoriEmbed)  
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y','komutlar','k'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};