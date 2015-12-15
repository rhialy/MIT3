var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('../Musik.db');

// Beispiel einer sehr einfachen Abfrage:
db.all('SELECT * FROM songs ORDER BY song_length', function (err, rows) {
  if (!err) {
    console.log('Die Abfrage ergab ' + rows.length + ' Zeilen');
    console.log('Hier ist eine der Zeilen:', rows[0]);
  } else {
    console.error('Etwas ist schief gegangen', err);
  }
});

db.close();
