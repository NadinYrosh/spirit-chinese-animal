var calculation = function(year) {
  var yearCalc = (year - 1912) % 12;
  console.log(yearCalc);
  if (yearCalc === 0) {
    var result = "Rat";
  } else if (yearCalc === 1) {
    var result = "Ox";
  } else if (yearCalc === 2) {
    var result= "Tiger";
  } else if (yearCalc === 3) {
    var result= "Rabbit";
  } else if (yearCalc === 4) {
    var result= "Dragon";
  } else if (yearCalc === 5) {
    var result= "Snake";
  } else if (yearCalc === 6) {
    var result= "Horse";
  } else if (yearCalc === 7) {
    var result= "Sheep";
  } else if (yearCalc === 8) {
    var result= "Monkey";
  } else if (yearCalc === 9) {
    var result= "Rooster";
  } else if (yearCalc === 10) {
    var result= "Dog";
  } else if (yearCalc === 11) {
    var result= "Pig";
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
