// var I = 1
// var V = 5
// var X = 10
// var L = 50
// var C = 100
// var D = 500
// var M = 1000
//
//
//
//   var convertableNumber = function(input) { //this will determine the space
//     var total =1;
//     debugger
//     for (var i=0; i<1; i++) {
//       total = i;
//
//     }
//     return total;
//   }
//
//
//

//


function toRomanNumeral(number) {
  // numberArray = number.toString().split("").reverse();
  var numberArray = number.toString().split("").reverse();
  var singleDigits = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tensDigits = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundredDigits = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thouDigits = ["", "M", "MM", "MMM", "MMMM"];

  var results = '';
  // debugger

  for (i = 0; i < numberArray.length; i++) {
    var num = parseInt(numberArray[i]);
    console.log(num);
    if (i === 0) {
      num = singleDigits[num];
      results = num + results;
    } else if (i === 1) {
      num = tensDigits[num];
      results = num + results;
    } else if (i === 2) {
      num = hundredDigits[num];
      results = num + results;
    } else if (i === 3){
      num = thouDigits[num];
      results = num + results;
    }
  }
  return results;
};

$(document).ready(function() {
  $("form").submit(function(event) { // takes the user input
    event.preventDefault();
    var input = $("#input").val();
    var final = toRomanNumeral(input);
    $(".output").text(final);
  });
});
