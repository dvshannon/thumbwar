const skaters = [];
const gameTypes = [];
var newSkater;

$('#add-skater').on('click', function() {
  event.preventDefault();
    $('.grid-container').empty();

    newSkater = $('#skater-name').val().trim();

    skaters.push(newSkater);

    for (var i = 0; i < skaters.length; i++) {
      newSkater = $('<div>').addClass('grid-item');
      newSkater.text(skaters[i]);
      $('.grid-container').prepend(newSkater);
      console.log(newSkater);
    }


});
