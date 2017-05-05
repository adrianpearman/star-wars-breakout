$(document).ready(function(){
  // Whenever we submit the new_film form
  $('#new_film').on('submit', function(e){

    // We'll stop the form from submitting normally
    e.preventDefault();

    // Instead we'll make an ajax request to our backend, asking for a JSON response
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(response){
      // Here's the response we received from the backend, which will be the film info
      console.log(response);
    })
  })
})
