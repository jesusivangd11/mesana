@echo off
setlocal
cd /d "%~dp0"

set "NODE_EXE=%~dp0runtime\node.exe"
set "PORT=4173"

if not exist "%NODE_EXE%" (
    echo ERROR: No se encontro Node.js en runtime\
    echo La instalacion de Mesana puede estar incompleta.
    pause
    exit /b 1
)

:: Si el servidor ya esta corriendo, solo abrir el navegador
powershell -NoProfile -Command "try { (Invoke-WebRequest 'http://127.0.0.1:%PORT%/' -UseBasicParsing -TimeoutSec 1 -ErrorAction Stop) | Out-Null; exit 0 } catch { exit 1 }" >nul 2>&1
if not errorlevel 1 goto :abrir

:: Iniciar servidor en ventana minimizada
start "Mesana - Servidor" /min cmd /k "cd /d ""%~dp0"" && ""%NODE_EXE%"" server.js"

:: Esperar hasta 20 segundos a que el servidor responda
for /l %%i in (1,1,20) do (
    timeout /t 1 /nobreak >nul
    powershell -NoProfile -Command "try { (Invoke-WebRequest 'http://127.0.0.1:%PORT%/' -UseBasicParsing -TimeoutSec 1 -ErrorAction Stop) | Out-Null; exit 0 } catch { exit 1 }" >nul 2>&1
    if not errorlevel 1 goto :abrir
)

echo.
echo ERROR: El servidor no respondio en 20 segundos.
echo Intenta cerrar y volver a abrir Mesana.
pause
exit /b 1

:abrir
start "" "http://127.0.0.1:%PORT%/index.html"
exit /b 0
