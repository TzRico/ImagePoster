// Github: https://github.com/Tzrico
// Discord: Tz#0001

const Discord = require('discord.js-selfbot-v11');
const client = new Discord.Client();
const fs = require('fs');
const colors = require("colors");
/**
 * Acessando config.json
 */
const config = require('./config.json');
const WebhookID = config.WEBHOOK_ID;
const Webhooktoken = config.WEBHOOK_TOKEN;
const UserToken = config.USER_TOKEN;
const UserID = config.USER_ID;
const UserPrefix = config.USER_PREFIX;
const AllowUser = config.ALLOW_USERS;
const webhook = new Discord.WebhookClient(WebhookID, Webhooktoken);
let counter = 0;

const Title = String.raw`



                       ██████╗  ██████╗ ███████╗████████╗ █████╗ ██████╗  ██████╗ ██████╗ 
                       ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
                       ██████╔╝██║   ██║███████╗   ██║   ███████║██║  ██║██║   ██║██████╔╝
                       ██╔═══╝ ██║   ██║╚════██║   ██║   ██╔══██║██║  ██║██║   ██║██╔══██╗
                       ██║     ╚██████╔╝███████║   ██║   ██║  ██║██████╔╝╚██████╔╝██║  ██║
                       ╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝
                                                                     


`;
console.log(colors.cyan(Title));

if (AllowUser === false) {
    /**
     * Para a webhook
     */
    fs.readdir('imagens/', (e, files) => {
        var i = 0;
        files.map((f) => {
            counter += 1;
            setTimeout(() => {
                const Attachment = new Discord.Attachment(`imagens/${f}`);
                webhook.send(Attachment).then(() => {
                    console.log(colors.cyan(`[GERENCIADOR #${i++}]: ${f} foi enviado com sucesso`))
                    fs.unlinkSync(`imagens/${f}`)
                }).catch(e => console.log(colors.cyan(`[GERENCIADOR #${i++}]: ${f} não pôde ser enviado "${e.message}"`)))
            }, counter * 1000);
        })
    })
} else {
    console.log(colors.red('                ╔════════════════════════════════════════════════════════════════════════════════╗'));
    console.log(colors.red('                ‖                                 Somente usuário                                ‖'));
    console.log(colors.red('                ╚════════════════════════════════════════════════════════════════════════════════╝'));
}

if (AllowUser === true) {
    client.on("ready", () => {
        console.log(colors.red('                ╔════════════════════════════════════════════════════════════════════════════════╗'));
        console.log(colors.red('                ‖                                Feito por Tz#0001                               ‖'));
        console.log(colors.red('                ╚════════════════════════════════════════════════════════════════════════════════╝'));
        console.log(colors.green(`                ‖                          [©] USUÁRIO: ${client.user.username}#${client.user.discriminator}`));
        console.log(colors.green(`                ‖                          [©] PREFIXO: ${UserPrefix}                                     `));
        console.log(colors.green(`                ‖                          [©] PERMITIR AOS USUÁRIOS: ${AllowUser}                                 `));
        console.log(colors.red('                ╔════════════════════════════════════════════════════════════════════════════════╗'));
        console.log(colors.red('                ‖                                                                                ‖'));
        console.log(colors.red('                ╚════════════════════════════════════════════════════════════════════════════════╝'));
    });

    client.on("message", async message => {
        if (message.author.id !== UserID) {
            return;
        }

        if (message.content.startsWith(UserPrefix) && message.author.id === UserID) {
            console.log(colors.green(`[COMANDO EXECUTADO] :: ${message.content}`));
        }

        if (message.content.startsWith(UserPrefix + 'postar')) {
            fs.readdir('imagens/', (e, files) => {
                var i = 0;
                files.map((f) => {
                    counter += 1;
                    setTimeout(() => {
                        const Attachment = new Discord.Attachment(`imagens/${f}`);
                        message.channel.send(Attachment).then(() => {
                            console.log(colors.green(`[GERENCIADOR #${i++}]: ${f} foi enviado com sucesso`))
                            fs.unlinkSync(`imagens/${f}`)
                        }).catch(e => console.log(colors.green(`[GERENCIADOR #${i++}]: ${f} não pôde ser enviado "${e.message}"`)))
                    }, counter * 1000);
                })
            })
            message.delete();
        }
    })

    client.login(UserToken);
} else {
    console.log(colors.red('                ╔════════════════════════════════════════════════════════════════════════════════╗'));
    console.log(colors.red('                ‖                                Somente webhook                                 ‖'));
    console.log(colors.red('                ╚════════════════════════════════════════════════════════════════════════════════╝'));
}