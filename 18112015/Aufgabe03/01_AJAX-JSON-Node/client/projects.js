function getProjects(evt) {
  $.get( "http://127.0.0.1:1337", function( data ) {
      
      data = JSON.stringify(projects);
      $("#projects").html(data);
    //was steckt in data
    //Den Array durchlaufen
    //html in den DOM einfügen

  });
}