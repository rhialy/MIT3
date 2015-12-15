function getTime(evt) {
  $.get( "http://127.0.0.1:1337", function( data ) { //Adresse der Anfrage und die Callback-Funktion, die bei Erfolg ausgeführt wird

    $( "#result" ).html( data ); // Fügt dem HTML Element der Klasse 'result' den Inhalt der Antwort hinzu

    console.log( "Load was performed." );
  });
}