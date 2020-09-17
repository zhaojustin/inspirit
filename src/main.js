//clock---------------------------
var timeFormat = false;
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
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

  //set date
  document.getElementById("date").innerHTML =
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

  //clock tick
  setTimeout(updateClock, 1000);
}

//initiate clock
updateClock();

//News---------------------------

var titles = new Array();
var links = new Array();

//news api
async function getNews() {
  var url =
    "https://cors-anywhere.herokuapp.com/" +
    "http://newsapi.org/v2/top-headlines?" +
    "sources=the-wall-street-journal&" +
    "apiKey=37ef5ba4167e43d593ed938ee7001fa6";
  var req = new Request(url);
  await fetch(req)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.articles.forEach((article) => {
        titles.push(article.title);
        links.push(article.url);
      });
    });
}

//set returned json to arrays
async function setNews() {
  await getNews();
  titles = titles;
  links = links;

  console.log(titles);
  console.log(links);

  var headlines = document.getElementsByClassName("headline");
  for (var i = 0; i < headlines.length; i++) {
    headlines[i].innerHTML = titles[i];
    headlines[i].href = links[i];
  }
}

setNews();
