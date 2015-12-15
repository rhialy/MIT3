# Übung 3: Node

Nachdem wir im vergangenen Praktikum grundsätzliche JavaScript Fähigkeiten geschult haben, möchten wir Ihnen den Umgang mit serverseitigem JavaScript näher bringen.

Zu den meisten Aufgaben gibt es *Dateien* die als Vorlage dienen. Nutzen Sie die Dateien und die darin enthaltenen Kommentare zum leichteren Verständnis der Aufgabenstellungen!

Wenn von *Terminal* die Rede ist, gilt für Windows natürlich die Kommandozeile CMD.exe. Für beinahe alle Aufgaben werden Sie diese brauchen. Alle Pfadangaben beziehen sich immer auf den relativen Ort. Das heißt, bei dem Befehl `node simpleHTTP.js` navigieren Sie zunächst in den Ordner, indem das Skript `simpleHTTP.js` liegt. Sie benötigen dazu den Ihnen bekannten Befehl `cd`. Zwei Punkte symbolisieren übergeordneten Ordner; mit `cd ..` gelangen Sie dort hin.

Bearbeiten Sie die Teilaufgaben in den dafür vorgesehenen Ordnern.  
Abgabetermin ist **Dienstag, 24.11.15 um 23:55**.

Sollten Sie *node.js* noch nicht installiert haben, dann tun Sie dies zuerst. Laden Sie ein Version für Ihr Betriebssystem auf https://nodejs.org/en/ herunter und installieren Sie diese. Im Terminal müsste nun der Befehl `node` verfügbar sein.

## Teil 1: AJAX, JSON und Node
Die Dateien dieses Teils befinden sich im Ordner: `01_AJAX-JSON-Node/`

### HTTP Server with Node
Datei: `server/simpleHTTP.js`

Die Aufgabe ist es, einen Server zu erstellen, der Ihnen die Uhrzeit im Browser anzeigt.

Sie starten den vorbereiteten HTTP-Server im Terminal mit:
```sh
node simpleHTTP.js
```  
Rufen Sie den Server im Browser auf (z.B. [127.0.0.1:1337](http://127.0.0.1:1337)).

Mit `ctrl` + `c` können Sie node, und damit auch den Server, stoppen. Denken Sie daran den Server nach Änderungen neu zu starten.

Geben Sie anstatt `Hello World!` die aktuelle Uhrzeit aus. Die aktuelle Uhrzeit können Sie mit `new Date().toTimeString()` generieren.

### JSON
Datei: `server/jsonString.js`  

Geben Sie den Array `projects` aus der Beispieldatei als JSON String aus. Sie benötigen dazu `JSON.stringify()`. Rufen Sie Ihr fertiges Skript wieder mit node auf: `node jsonString.js`.

### AJAX Request (vereinfacht mit jQuery)
Datei: `client/ajax.html`, `client/ajax.js`

Rufen Sie den HTTP Server aus der ersten Aufgabe, welcher die Uhrzeit ausgibt mit einem AJAX Request auf und geben Sie die Uhrzeit auf der HTML Seite aus in `<span>` Element aus.

### Client-Server Skript
Dateien: `client/projects.html`, `server/projects.js`

Speichern Sie Ihre Projekte im Dokument `server/projects.js` in den Array `projects` oder benutzen Sie unsere Beispieldaten.  

Ihr Serverskript `server/projects.js` soll diese Informationen als JSON ausliefern. Denken Sie an den richtigen Content-Type bzw. MIME-Type. Ein Blick in die Folien hilft ;)  
Ihr Browserskript `client/projects.js` soll diese Informationen per AJAX abrufen und in die HTML Seite einsetzen. Sie können in dem DOM auch neues HTML hinzufügen:
```js
$('element').append('<article><h2>' + title + '</h2><p>' + title + '</p></article>');
```

## Teil 2: Module
Die Dateien dieses Teils befinden sich im Ordner: `02_Modules/` 

### Packages nutzen
Dateien: _Kopieren Sie Ihr Ergebnis aus der ersten Aufgabe in Teil 1_

Nutzen Sie das Paket `moment` oder `strftime`, um die Datumsausgabe aus der ersten Aufgabe des Teil 1 *HTTP Server with Node* leserlicher zu formatieren z.B. "18.11.15 um 11:30" oder "17 Uhr und 20 Minuten". Das Paket installieren Sie im Terminal mit:
```sh
npm install namedespakets
```
Die Dokumentationen finden Sie unter [momentjs.com/docs/](http://momentjs.com/docs/) oder [github.com/samsonjs/strftime](https://github.com/samsonjs/strftime).

Ihr Ergbnis können Sie wieder über den Browser abrufen.

### Eigenes Modul
Dateien: `base.json`, `doubleAll.json`

Schreiben Sie eine eigenes Modul in `doubleAll.json`, dass jedes Element eines Arrays verdoppelt und den daraus resultierenden Array zurück gibt. Die Datei `base.json` ruft dieses Modul jedes mal mit unterschiedlichen Werten auf. Binden Sie dort Ihr Modul ein.  
Die Funktion [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) könnte hierfür hilfreich sein.

Module exportieren:
```js
module.exports = meineFunktionOderObjekt
```

Module in anderen Skipts einbinden:
```js
var somemodule = require('./mymodule.js')
```

Starten dieses Programms:
```sh
$ node base.json
```

Das Modul `random-js` muss man nicht verstehen, um die Aufgabe zu lösen. Es generiert lediglich Zufallszahlen. Wer mehr wissen will: [npmjs.com/package/random-js](https://www.npmjs.com/package/random-js)

## Teil 3: Portfolio App mit Express
Die Dateien dieses Teils befinden sich im Ordner: `03_Express`

### Simple HTTP Route mit Get Parameter
Datei: _Greifen Sie hier auf die Server aus Teil 1 zurück_

Erstellen Sie einen HTTP Server, der ein bestimmtes Projekt Ihres Portfolios ausgibt, wenn er eine GET Anfrage zu '/project' empfängt. Die Anfrage soll einen *query string* mit dem key 'id' und eine Projekt-Id als Wert enthalten.

Zum Beispiel:

  `http://127.0.0.1:1337/project?id=1`

Das `request`/`req` Objekt eines HTTP Servers hat eine `url` Eigenschaft, welche Sie brauchen, um diese *"route"* aufzulösen: `req.url` 

Man kann die URL und *query string* mit Hilfe des Node Core Moduls 'url' parsen. `url.parse(request.url, true)` gibt Ihnen ein Objekt mit nützlichen Eigenschaften.

Für ein Beispiel im Terminal, nehmen Sie:

```sh
$ node -pe "require('url').parse('/test?q=1', true)"
```

Die Dokumentation des `url` Moduls finden Sie hier: https://nodejs.org/api/url.html

### Express einrichten
Nutzen Sie den `express-generator`, um eine Grundlegende Struktur für eine Express App anzulegen. Ersetzen Sie `myapp` durch einen Namen Ihrer Wahl und führen Sie die Befehle im Terminal aus.

1. Installieren des Kommandozeilentools `expressgenerator`, zum automatisierten Anlegen von Express Projekten.  

    ```sh
    $ npm install -g express-generator
    ```
2. Im neuen Ordner `myapp` wird eine Express App angelegt mit `--hbs`, der Handlebars-Template Engine und `--git`, der .gitignore Datei.

    ```sh
    $ express myapp --hbs --git
    ```
3. Wechseln in das neuerstellte Verzeichnis `myapp/` und installieren aller Dependencies (Abhängigkeiten / notwendige Module) die Express benötigt.  
    ```sh
    $ cd myapp && npm install
    ```

4. Starten der Anwendung mit dem Modus Debug, um den Status der Anwendung zu verfolgen.  
    Mac/Linux:
    ```sh
    $ DEBUG=myapp:* npm start
    ```
    Windows:
    ```sh
    > set DEBUG=myapp:* & npm start
    ```

Rufen Sie nun Ihre Express App im Browser auf. Es gibt zwei vordefinierte Routen:

* `index` unter `/`: http://127.0.0.1:3000/
* `/users`: http://127.0.0.1:3000/users

* und error handling: http://127.0.0.1:3000/asdfasdfasdf

Was wird im Terminal ausgegeben?

Mehr Infos: [expressjs.com/starter/generator.html](http://expressjs.com/starter/generator.html)

### Titel ändern

Machen Sie sich mit dem Aufbau von Express vertraut. Die Variable `{{title}}` wird in den Templates `views/layout.hbs` und `views/index.hbs` verwendet, doch an welcher Stelle wird der Wert definiert?  
Ändern Sie `title` in einen passenden Titel für Ihr persönliches Portfolio.

### Rendern von Templates

Passen Sie die Templates so an, dass Sie Ihr Portfolio aus der HTML Abgabe übernehmen oder erweitern.

### Nicht Teil der Abagbe: Vorschau für nächste Woche: Routen

Erstellen Sie Routen für Ihre Portfoliostruktur: z.B. About, Projekte und Impressum. Zusätzlich sollten Sie eine Route erstellen, die genau ein Projekt zeigt. Nutzen Sie dazu wieder GET Parameter, wie in Aufgabe *Simple HTTP Route mit Get Parameter*

# Bonus
Erweitern Sie Ihre Express App:
* (Komplettes) Portfolio mit Navigation (z.B. Menü)
* MVC: Nutzen Sie Models für eine klarer Trennung von Daten und Darstellung
* AJAX: Nutzen Sie AJAX, um gewisse Daten Ihrer App auszugeben. Denken Sie daran, das benötigte JS trotzdem vom Server geliefert werden muss. (Statische Dateien)