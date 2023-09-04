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

function updateGrille(id, category) {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE Grille SET Category = ? WHERE id = ?";
        
        db.run(sql, [category, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ changes: this.changes });
            }
        });
    });
}
function insertGrille(category, callback) {
    const sql = "INSERT INTO Grille (Category) VALUES (?)";
    db.run(sql, [category], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, { lastID: this.lastID });
    });
}
function deleteGrille(id, callback) {
    const sql = "DELETE FROM Grille WHERE id = ?";
    db.run(sql, [id], function(err) {
        if (err) {
            return callback(err);
        }
        callback(null, { changes: this.changes });
    });
}

module.exports = { getGrille, updateGrille, insertGrille, deleteGrille };
