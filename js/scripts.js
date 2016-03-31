// var rat = ["1912", "1924", "1936", "1948", "1960", "1972", "1984", "1996", "2008"];
// var ox = ["1913", "1925", "1937", "1949", "1961", "1973", "1985", "1997", "2009"];
// var tiger = [1914, 1926, 1938, 1950, 1962, ]
var rat;
var ox;
var tiger;
var rabbit;
var dragon;
var snake;
var horse;
var sheep;
var monkey;
var rooster;
var dog;
var pig;


var calculation = function(year) {
  var yearCalc = (year - 1912) % 12;
  console.log(yearCalc);
  if (yearCalc === 0) {
    var result = "rat"
  } else if (yearCalc === 1) {
    var result = "ox";
  }
  return result;
};






$(document).ready(function() {
  $("form").submit(function(event) { // takes the user input
    event.preventDefault();
    var formInput = parseInt($("#input").val());
    var final = calculation(formInput);
    $(".output").text(final);
  });
});
