$(document).ready(function(){
  $('button').click(function(){
    $('table').append('<tr><td>'+$('input[name="first"]').val()+'</td><td>'
    +$('input[name="last"]').val()+'</td><td>'
    +$('input[name="email"]').val()+'</td><td>'
    +$('input[name="contact"]').val()+'</td>');
    return false;
  });
});
