@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo   Subir cambios de Mesana a GitHub
echo ============================================
echo.

where git >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git no esta instalado.
    pause
    exit /b 1
)

set "MSG="
set /p MSG="Describe el cambio (enter = 'actualizacion'): "
if "%MSG%"=="" set "MSG=actualizacion"

git add -A
git commit -m "%MSG%"
git push
if errorlevel 1 (
    echo.
    echo Hubo un problema al subir. Revisa el mensaje de arriba.
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   Cambios subidos. En la PC de trabajo usa
echo   "Actualizar Mesana" para descargarlos.
echo ============================================
echo.
pause
