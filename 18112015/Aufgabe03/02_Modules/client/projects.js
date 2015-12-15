function getProjects(evt) {
  $.get( "http://127.0.0.1:1337", function( data ) {
    
    var projectsObj = JSON.parse(data);
    
    for(i = 0; i < 3; i++) {
        var title = projectsObj.projects[i].title;
        var description = projectsObj.projects[i].description;
        $("#projects").append('Titel: ' + title + ' <br> Description: ' + description + '<br> <br>');
    }
      
    //Den Array durchlaufen
    //html in den DOM einfügen

  });
}