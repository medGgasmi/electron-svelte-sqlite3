const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./newDb.db");

function getCategories(callback) {
    db.all("SELECT id, Category FROM Grille", [], (err, rows) => {
        if(err) {
            throw err;
        }
        callback(rows);
    });
}

module.exports = { getCategories };
