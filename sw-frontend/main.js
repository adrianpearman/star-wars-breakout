// First we'll wait for the document to finish loading
$(document).ready(function() {
  console.log("Hello, World!");

  // We'll immediately start making an ajax request to the star wars API
  $.ajax({
    url: 'http://swapi.co/api/films',
    method: 'GET',
    data: {},
    dataType: 'json'
  }).done(function(response){
    // Whenever that request finishes, we'll go over all our films and create
    // h1 elements for each one
    for (var i = 0; i < response.results.length; i++) {
      var h1 = "<h1>" + response.results[i].title + "</h1>"
      $('body').append(h1);
    }
  })
});
