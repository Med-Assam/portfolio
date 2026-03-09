@echo off
echo =====================================
echo Installation Node.js pour Portfolio
echo =====================================
echo.

REM Téléchargement Node.js portable via PowerShell avec la politique bypass
powershell -ExecutionPolicy Bypass -Command "$ProgressPreference = 'SilentlyContinue'; $url = 'https://nodejs.org/dist/v20.11.1/node-v20.11.1-win-x64.zip'; $output = '%USERPROFILE%\node-portable.zip'; Write-Host 'Telechargement Node.js...'; Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing; Write-Host 'Extraction...'; Expand-Archive -Path $output -DestinationPath '%USERPROFILE%' -Force; if (Test-Path '%USERPROFILE%\node-v20.11.1-win-x64') { Rename-Item '%USERPROFILE%\node-v20.11.1-win-x64' '%USERPROFILE%\nodejs' -Force }; Write-Host 'Installation terminee'"

REM Ajout au PATH utilisateur
setx PATH "%USERPROFILE%\nodejs;%PATH%"

echo.
echo =====================================
echo Installation terminee !
echo Fermez cette fenetre et ouvrez un NOUVEAU terminal pour utiliser Node.js
echo =====================================
pause
