const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./newDb.db");

function getGrille(callback) {
    db.all("SELECT * FROM Grille", [], (err, rows) => {
        if(err) {
            throw err;
        }
        callback(rows);
    });
}

module.exports = { getGrille };
