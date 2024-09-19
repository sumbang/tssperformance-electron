const electronInstaller = require('electron-winstaller');
const path = require('path');

async function createInstaller() {
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: path.join(__dirname, '.'),
      outputDirectory: path.join(__dirname, 'installer'),
      authors: 'TSS Performance',
      exe: 'tssperformance.exe',
      setupExe: 'YourAppInstaller.exe',
      setupIcon: path.join(__dirname, 'resources/app/public/icons/favicon.ico'),
      noMsi: true
    });
    console.log('Installateur créé avec succès!');
  } catch (e) {
    console.log(`Erreur lors de la création de l'installateur: ${e.message}`);
  }
}

createInstaller();