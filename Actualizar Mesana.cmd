@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo   Actualizando Mesana...
echo ============================================
echo.

where git >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git no esta instalado en esta PC.
    echo Descargalo desde https://git-scm.com/download/win
    echo instalalo, y vuelve a ejecutar este archivo.
    echo.
    pause
    exit /b 1
)

git pull --ff-only
if errorlevel 1 (
    echo.
    echo No se pudo actualizar. Revisa el mensaje de arriba.
    echo Tus datos NO se tocaron.
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   Listo. Mesana esta actualizado.
echo   Tus datos (ventas, productos) intactos.
echo   Cierra y vuelve a abrir Mesana.
echo ============================================
echo.
pause
