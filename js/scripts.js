$(function(){

  var leapYear = function(year) {
  if((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)){
    return true
  }  else{
    return false;
  }
};

  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);

  });
});
