//clock---------------------------
var timeFormat = true;
var showNoon = null;
function updateClock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  //12 hour time format
  if (!timeFormat) {
    var noon = "AM";
    if (h == 0) h = 12;
    if (h > 12) {
      h = h - 12;
      noon = "PM";
    }
  }
  m = m < 10 ? "0" + m : m;
  document.getElementById("clock").innerHTML = h + ":" + m;

  //clock tick
  setTimeout(updateClock, 1000);
}

//initiate clock
updateClock();
