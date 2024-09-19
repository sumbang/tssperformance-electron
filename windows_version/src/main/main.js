const { app, BrowserWindow, session } = require('electron');
const path = require('path');

//app.disableHardwareAcceleration();

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    //fullscreen: true, 
    title: 'Tss Performance',
    icon: path.join(__dirname, '../../resources/favicon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false
    },
  });

 // win.webContents.openDevTools();
  
  // Chargez l'URL du site web que vous voulez utiliser
 //win.loadURL('https://tss.wouri.tv/'); // Remplacez par l'URL de votre site web
 
 session.defaultSession.clearCache().then(() => {
    // Charger l'URL
      win.loadURL('https://tss.wouri.tv/'); // Remplacez par l'URL de votre application web
  }).catch(err => {
      console.error("Erreur lors de la suppression du cache :", err);
  }); 

  //win.loadFile('public/flutter_web/index.html'); 

}

app.whenReady().then(() => {

  console.log(__dirname);
    
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin' || process.platform === 'win32' || process.platform === 'linux') {
    app.quit();
  }
});
