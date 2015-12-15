var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET artists listing. */
router.get('/', function(req, res, next) {

  var db = new sqlite3.Database('../Musik.db');

  db.serialize(function() {

    db.all('SELECT ID as id, artist as name FROM artists', function(err, rows) {if (err) {
          res.status(err.status || 500);
          res.render('error', {
            message: err.message,
            error: err
          });
        }
        else {
          res.render('artists', { title: 'Meine Künstler', artists: rows, tracks: rows.length });
        }
    });
  });

  db.close();


});

/* GET songs per artist listing. */
router.get('/songs', function(req, res, next) {

  if (req.query.artist === undefined) {
    res.status(404);
    res.render('error', {
      message: 'Dieser Künstler ist nicht verfügbar',
      error: {status: 404, stack: null}
    });
  }
  else {

    var db = new sqlite3.Database('../Musik.db');

    db.serialize(function() {
      var artist;
      db.get('SELECT artist FROM artists WHERE ID = ?', req.query.artist, function(err, row){
        if (err) {
          res.status(err.status || 500);
          res.render('error', {
            message: err.message,
            error: err
          });
        }
        else {
          artist = row.artist;
        }
      });
      db.all('SELECT songs.artist as artist, songs.title as title, songs.song_length as length FROM songs, artists_songs WHERE songs.ID = artists_songs.song_id AND artists_songs.artist_id = ?', req.query.artist, function(err, rows) {
        if (err) {
          res.status(err.status || 500);
          res.render('error', {
            message: err.message,
            error: err
          });
        }
        else {
          res.render('songs', { artist: artist, songs: rows, tracks:rows.length });
        }

      });
    });

    db.close();
  }

});

module.exports = router;
