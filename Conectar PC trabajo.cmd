@echo off
setlocal
cd /d "%~dp0"

echo ============================================================
echo   CONECTAR ESTA PC A GITHUB (se hace UNA sola vez)
echo ============================================================
echo.
echo Esto enlaza esta carpeta con el repositorio para poder
echo actualizar despues con un solo doble clic.
echo.
echo IMPORTANTE: tus datos (database.db y backups) NO se tocan.
echo La base de datos se migra sola a %%LOCALAPPDATA%%\Mesana
echo la proxima vez que abras Mesana.
echo.
echo Antes de continuar, asegurate de tener una copia de
echo database.db en una USB por seguridad.
echo.
set "OK="
set /p OK="Escribe SI para continuar: "
if /I not "%OK%"=="SI" (
    echo Cancelado. No se hizo ningun cambio.
    pause
    exit /b 0
)

where git >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: Git no esta instalado en esta PC.
    echo Descargalo e instalalo desde:
    echo   https://git-scm.com/download/win
    echo Luego vuelve a ejecutar este archivo.
    echo.
    pause
    exit /b 1
)

echo.
echo Conectando con GitHub...
git init -b main
git remote remove origin 2>nul
git remote add origin https://github.com/jesusivangd11/mesana.git
git fetch origin
if errorlevel 1 (
    echo.
    echo No se pudo conectar. Revisa el internet y el login de GitHub.
    pause
    exit /b 1
)

git reset --hard origin/main
if errorlevel 1 (
    echo.
    echo Hubo un problema al traer el codigo. Revisa el mensaje de arriba.
    pause
    exit /b 1
)

echo.
echo ============================================================
echo   Listo. Esta PC ya esta conectada.
echo.
echo   Ahora abre Mesana una vez (migra los datos).
echo   Para futuras actualizaciones: doble clic en
echo   "Actualizar Mesana.cmd"
echo ============================================================
echo.
pause
