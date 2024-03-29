const { app, BrowserWindow, ipcMain, nativeImage } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // Set the dock icon
  const iconPath = path.join(__dirname, 'assets', "icons", "mac", 'icon-overlyvisual.icns');
  const icon = nativeImage.createFromPath(iconPath);
  app.dock.setIcon(icon);
}

app.on('ready', () => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

});

// Listen for 'set-wallpaper' message from renderer process
ipcMain.on('set-wallpaper', (event, imagePath) => {
  // Call the function to set the desktop wallpaper
  setWallpaper(imagePath);
});

// Function to set the desktop wallpaper
async function setWallpaper(imagePath) {
  try {
    const { setWallpaper } = await import('wallpaper');
    const directoryPath = path.join(__dirname, 'assets', 'images');
    const imagePathWithoutPrefix = imagePath.replace('assets/images/', '');
    const fullPath = path.join(directoryPath, imagePathWithoutPrefix);
    console.log('Full path:', fullPath); // Log the full path for troubleshooting
    await setWallpaper(fullPath);
    console.log('Wallpaper set successfully');
  } catch (error) {
    console.error('Error setting wallpaper:', error);
  }
}


