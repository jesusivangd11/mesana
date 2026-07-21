// Mesana 3.0 — Proceso principal de Electron.
// Levanta el servidor interno (Express + SQLite) y lo muestra en una ventana
// de escritorio propia. No abre cmd ni navegador.
const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');

let mainWindow = null;

// --- Una sola instancia ---
// Si Mesana ya está abierta, un segundo doble-clic enfoca la ventana existente
// en vez de arrancar otro servidor en el mismo puerto.
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(async () => {
    Menu.setApplicationMenu(null); // sin barra de menú: se ve como app nativa

    // Arrancar el servidor interno ANTES de abrir la ventana.
    try {
      const { start } = require('./server');
      await start({
        // Cuando la app pide reiniciarse (p. ej. tras restaurar un respaldo),
        // relanzamos el proceso en vez de matarlo.
        onRestartRequested: () => { app.relaunch(); app.exit(0); },
      });
    } catch (err) {
      const msg = err && err.code === 'EADDRINUSE'
        ? 'Mesana ya está en uso (puerto 4173 ocupado).\nCierra la otra ventana e intenta de nuevo.'
        : 'No se pudo iniciar Mesana:\n' + (err && err.message ? err.message : String(err));
      dialog.showErrorBox('Mesana 3.0', msg);
      app.exit(1);
      return;
    }

    createWindow();
  });

  app.on('window-all-closed', () => {
    app.quit();
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    title: 'Mesana 3.0',
    icon: path.join(__dirname, 'mesana.ico'),
    autoHideMenuBar: true,
    backgroundColor: '#ffffff',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Mostrar ya maximizada y sin parpadeo blanco.
  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.show();
  });

  mainWindow.on('closed', () => { mainWindow = null; });

  mainWindow.loadURL('http://127.0.0.1:4173/index.html');
}
