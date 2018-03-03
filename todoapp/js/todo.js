function dodajPopis(){
  var text = $("#novi-tekst").val();
  $("#todolista").append('<li class="list-group-item"><input type="checkbox"/>'+text+'<button type="button" class="btn btn-danger btn-rounded btn pull-right btn-sm obrisi">Delete</button></li>');
  $("#novi-tekst").val('');
}

function obrisiPopis() {
  $(this).parent().remove();
}
  function zavrsenPopis() {
  if ( $(this).parent().css('textDecoration') == 'line-through') {
    $(this).parent().css('textDecoration', 'none');
  } else {
    $(this).parent().css('textDecoration', 'line-through');
  }

}

$(function() {
  $("#dodaj").on('click', dodajPopis);

  $(document).on('click', '.obrisi', obrisiPopis);
  $(document).on('click', '.done', zavrsenPopis);

  

});
