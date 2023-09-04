const { ipcRenderer } = require('electron');

export async function fetchGrilleData() {
    return await ipcRenderer.invoke('fetch-Grille');
}

export function updateGrilleData(id, category) {
    return ipcRenderer.invoke('update-Grille', id, category);
}

export function insertGrilleData(category) {
    return ipcRenderer.invoke('insert-Grille', category);
}

export function deleteGrilleData(id) {
    return ipcRenderer.invoke('delete-Grille', id);
}