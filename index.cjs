require('electron-reload')(__dirname);//don't forget to comment this line when running "npm run dist"
const { app, BrowserWindow, ipcMain } = require('electron');
const { getGrille, updateGrille, insertGrille, deleteGrille  } = require('./database.cjs');

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
    win.webContents.openDevTools();
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

ipcMain.handle('update-Grille', async (event, id, category) => {
    try {
        const result = await updateGrille(id, category);
        return result;
    } catch (error) {
        throw error;
    }
});

ipcMain.handle('insert-Grille', async (event, category) => {
    return new Promise((resolve, reject) => {
        insertGrille(category, (result) => {
            resolve(result);
        });
    });
});

ipcMain.handle('delete-Grille', async (event, id) => {
    return new Promise((resolve, reject) => {
        deleteGrille(id, (result) => {
            resolve(result);
        });
    });
});