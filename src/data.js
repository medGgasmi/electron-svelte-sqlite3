const { ipcRenderer } = require('electron');

export async function fetchGrilleData() {
    return await ipcRenderer.invoke('fetch-Grille');
}