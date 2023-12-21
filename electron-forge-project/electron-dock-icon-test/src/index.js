const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the HTML file using win.loadURL()
  const indexPath = path.join(__dirname, 'index.html');
  mainWindow.loadURL(`file://${indexPath}`);

}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
