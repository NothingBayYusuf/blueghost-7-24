const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__MÜZİK__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **b!çal** - ismini yazdığınız şarkıyı çalar. \n"
        +                        
        "❯ **b!kapat** - şarkıyı kapatır. \n"     
        +                        
        "❯ **b!skip** - bir sonraki şarkıya geçersiniz. \n" 
        +        
        "❯ **b!durdur** - şarkıyı durdurur. \n"
        +
        "❯ **b!devam** - duran şarkıyı devam ettirir. \n"
        +
        "❯ **b!ses** - şarkının ses seviyesini ayarlarsınız 1-10.\n"
        )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/S8ReBK8) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=488354119908851712&scope=bot&permissions=393329727)")
    message.channel.send(kategoriEmbed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};