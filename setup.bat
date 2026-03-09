@echo off
echo =====================================
echo Configuration complete du Portfolio
echo =====================================
echo.

cd /d "%~dp0"

REM Vérifier si Node.js est installé
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Node.js n'est pas installe ou pas dans le PATH
    echo.
    echo Executez d'abord: install-nodejs.bat
    echo Puis fermez et rouvrez ce terminal
    pause
    exit /b 1
)

echo [1/5] Node.js detecte
node -v
npm -v
echo.

echo [2/5] Installation des dependances npm...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] npm install a echoue
    pause
    exit /b 1
)
echo.

echo [3/5] Initialisation du depot Git...
if not exist ".git" (
    git init
    git add .
    git commit -m "Initial commit - Portfolio Astro complet"
    git branch -M main
    git remote add origin https://github.com/Med-Assam/portfolio.git
    echo [INFO] Depot Git initialise localement
) else (
    echo [INFO] Depot Git deja initialise
)
echo.

echo [4/5] Instructions pour GitHub CLI...
echo Pour pousser vers GitHub:
echo   1. Installez GitHub CLI: https://cli.github.com/
echo   2. Authentifiez-vous: gh auth login
echo   3. Configurez Git: gh auth setup-git
echo   4. Poussez le code: git push -u origin main
echo.

echo [5/5] Instructions pour Vercel...
echo Pour deployer:
echo   1. Installez Vercel CLI: npm install -g vercel
echo   2. Authentifiez-vous: vercel login
echo   3. Deployez: vercel --prod
echo   4. Configurez l'alias: vercel alias set [url] portfolio-mohamed-assam.vercel.app
echo.

echo =====================================
echo Configuration terminee !
echo =====================================
echo.
echo Commandes utiles:
echo   npm run dev      - Serveur de developpement local
echo   npm run build    - Build de production
echo   npm run preview  - Apercu du build
echo.
pause
