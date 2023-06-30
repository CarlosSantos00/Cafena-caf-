


$(document).ready(function() {
    // Handle search box input event
    $('#search-box').on('input', function() {
      var searchText = $(this).val().toLowerCase(); // Get the search text in lowercase
  
      // Loop through each image in the gallery
      $('.image').each(function() {
        var imageTitle = $(this).data('title').toLowerCase(); // Get the image title in lowercase
  
        // Check if the search text matches the image title
        if (imageTitle.indexOf(searchText) === -1) {
          // Hide the image if it doesn't match the search text
          $(this).hide();
        } else {
          // Show the image if it matches the search text
          $(this).show();
        }
      });
    });
  });
  
  