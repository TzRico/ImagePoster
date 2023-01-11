@echo off
title Módulos de inicialização v.2.1.0
:top
cls
node launch.js
pause
    call npm install node-fetch
    call npm install @discordjs/uws@^10.149.0
    call npm install discord.js-selfbot-v11
    call npm install colors
pause
cls
pause
exit
goto :top