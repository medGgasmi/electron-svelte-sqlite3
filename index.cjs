require('electron-reload')(__dirname);//don't forget to comment this line when running "npm run dist"
const { app, BrowserWindow, ipcMain } = require('electron');
const { getCategories, getGrille } = require('./database.cjs');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon:"icon.ico",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            
        },
        frame: true
    });

    win.loadFile('./public/index.html');
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});



ipcMain.handle('fetch-Grille', async (event) => {
    return new Promise((resolve, reject) => {
        getGrille((data) => {
            resolve(data);
        });
    });
});
