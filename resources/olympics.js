var jsonUrl = 'https://api.myjson.com/bins/141r3r';
var request = new XMLHttpRequest();
request.open('GET', jsonUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    var mydata = request.response;
    console.log("json load done");
    console.log(mydata);
}