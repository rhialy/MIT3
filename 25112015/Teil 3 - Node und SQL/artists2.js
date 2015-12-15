var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('../Musik.db');

var suchwort = "They Might Be Giants";

// Beispiel einer sehr einfachen Abfrage mit eingesetzter Variable:
db.all('SELECT * FROM artists WHERE artist = ?', suchwort, function (err, rows) {
  if (!err) {
    console.log('Die Abfrage ergab ' + rows.length + ' Zeilen');
    console.log('Hier ist eine der Zeilen:', rows[0]);
  } else {
    console.error('Etwas ist schief gegangen', err);
  }
});

db.close();
