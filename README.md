# Postador de Imagens
Ferramenta simples que publica imagens em um canal especificado para você enquanto você continua usando o Discord.

| Image Poster User | Image Poster Webhook | 
| ------------- | ------------- | 
| ![result](https://media.discordapp.net/attachments/1062790187844911234/1062809632621473873/image.png?width=850&height=434) | ![result](https://media.discordapp.net/attachments/1062790187844911234/1062810465014665276/image.png) |

# Porque?

*Se você deseja enviar uma grande quantidade de imagens para alguém ou para um canal enquanto ainda pode usar o Discord em vez de esperar que todos os arquivos sejam carregados, esta é a ferramenta para você.*

## Requisitos antes da configuração:

1. [Node.JS](https://nodejs.org/en/) Instalado.
2. Editor de código: VSCODE (recomendado), Sublime, Atom etc.

## Configuração: script

1. Execute o arquivo `Instalador` e aguarde a instalação de todos os pacotes.
1. Clique com o botão direito no arquivo 'config.json'.
2. Abra o arquivo no bloco de notas ou em um editor de código, por exemplo, VSC (Visual Studio Code).
3. Preencha TODAS as strings.
4. Salve.

## Propriedades de configurações
- `WEBHOOK_ID` | `string` | Seu ID da webhook.
- `WEBHOOK_TOKEN` | `string` | Seu token da webhook.
- `USER_TOKEN` | `string` | Seu token de conta | Como obter token? [Clique aqui](https://www.youtube.com/watch?v=YEgFvgg7ZPI)
- `USER_ID` | `string` | ID do usuário | Deve corresponder ao token ou a ferramenta não funcionará.
- `USER_PREFIX` | `string` | O prefixo para o comando a ser executado.
- `ALLOW_USERS` | `bool` | Padrão definido como `true`. Permite o uso de sua conta.

### Exemplo: `config.json`

```
{
    "WEBHOOK_ID": "812241824567263253",
    "WEBHOOK_TOKEN": "9dUpdCFEfBXLaENRKaRIrmRSlaLHymcjQ-lL9_mvnFpGiNb7SvjY_JKIUDkCsestPI10",
    "ALLOW_USERS": true,
    "USER_TOKEN": "Njg1NTc3NTgzMzgzMDE5NTUw.XmLGLA.Ck1qHplDAoDzsGFEQOplIsRdkdd",
    "USER_ID"   : "709827684888215582",
    "USER_PREFIX": "-"
}
```

# Comece:

1. Adicione imagens à pasta `/imagens`.
2. Execute o arquivo `Ligar.bat`. | Clique duplo com o botão esquerdo.

## Limitações: Webhook

* Limite: todas as webhooks só podem carregar até 8 MB de tamanho de arquivo.
* Limite: quanto maior o arquivo, mais tempo leva para carregar.

## Limitações: Usuário

* Limite: arquivos de 8 MB se o usuário não tiver nitro.
* Limite: arquivos de 50 MB se o usuário tiver o nitro classic.
* Limite: arquivos de 100 MB se o usuário tiver nitro boost.
* Limite: quanto maior o arquivo, mais tempo leva para carregar.

| Mostruário #1 | 
| ------------- | 
| ![result](https://media.discordapp.net/attachments/1062790187844911234/1062809249199173762/image.png?width=830&height=434) | 

## Como funciona:
Usuário:
* No comando, exemplo: `prefixo`postar

Webhook:
* No arranque. Nenhum comando necessário.

# Isenção de responsabilidade

Esta ferramenta foi feita para fins educacionais e prova de conceitos. Não sou responsável por qualquer ação ilegal e sem precedentes e qualquer violação dos ToS administrados por terceiros.

## Contate-me

﹒[Discord](https://discord.com/users/472756345909805059)
﹒[Servidor do discord](https://discord.gg/giflandia)
﹒[Steam](https://steamcommunity.com/id/Tzrico/)

> ⭐ Sinta-se à vontade para marcar o repositório como estrela se isso o ajudou! ;)

----

> ImagePoster by Tz está licenciado sob Attribution 4.0 International
