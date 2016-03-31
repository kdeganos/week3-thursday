//business logic
var codedMessage = function(inputString) {
  var uncodedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_'~()]/g,"").replace(/\s/g,"");
  var columns = Math.sqrt(uncodedString.length);
  columns = Math.ceil(columns);
  var splitUncodedArray = uncodedString.split('');
  var codedArray = []
  for (var i = 0; i <= columns; i++) {
    for (var indy = i; indy <= splitUncodedArray.length; indy += columns - 1) {
      codedArray.push(splitUncodedArray[indy])
    }
  }
  for (var i = 5; i <= codedArray.length; i += 6) {
    codedArray.splice(i, 0, " ");
  }
  return codedArray.join('');
}
//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputString = $('#inputString').val();
    var result = codedMessage(inputString);
    $("#output").text(result);
  });
});
