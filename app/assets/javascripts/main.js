$(function() {

  function findHints() {
    return $.ajax({
      url: "/users/<%= current_user.id %>/load_hints",
      type: 'post'
    });
  }

  function showHints() {
    return $.ajax({
      url: "/users/<%= current_user.id %>/matches",
      type: 'get'
    });
  }

  $('#load-hints').on('click', function() {
    findHints().done(function(data) {
      console.log(data);
    });
    $(this).off();
  });

  $('#show-hints').on('click', function() {
    showHints().done(function(data) {
      for (i=0;i<data.length;i++) {
        $matchDiv = $('<div>');
        $matchDiv.addClass('match');
        $matchPic = $('<img>');
        $matchPic.attr('src', data[i]['profile_picture']);
        $matchDiv.append($matchPic);
        $('body').append($matchDiv);
      }
    });
    $(this).off();
  });

});
