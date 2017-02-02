setTimeout(function() {
  $('.ghx-extra-field-content').filter(function() {
      return $(this).text() === "None";
  }).css("display", "none");
}, 1000) //give the page a second to load the cards
