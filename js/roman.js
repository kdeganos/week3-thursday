//business logic


var toRoman = function(inputNumber) {

  var numberArray = inputNumber.split('').reverse();
  var referenceArrayBase1 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var referenceArrayBase10 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var referenceArrayBase100 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var referenceArrayBase1000 = ['', 'M', 'MM', 'MMM'];
  var finalArray = [];
  for (var i = 0; i <= numberArray.length; i++) {
    if (i === 0) {
      finalArray.push(referenceArrayBase1[numberArray[i]]);
    }
    else if (i === 1) {
      finalArray.push(referenceArrayBase10[numberArray[i]]);
    }
    else if (i === 2) {
      finalArray.push(referenceArrayBase100[numberArray[i]]);
    }
    else {
      finalArray.push(referenceArrayBase1000[numberArray[i]]);
    }
  };

  return finalArray.reverse().join('');
};




//user logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumber = $('#inputNumber').val();
    var result = toRoman(inputNumber);
    $("#output").text(result);
  });

});
