var olympicModel = function olympicModel() {



}

olympicModel.prototype.init = function(view) {


    var jsonUrl = 'https://api.myjson.com/bins/dxbgz';
    var request = new XMLHttpRequest();
    request.open('GET', jsonUrl, true);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var mydata = request.response;
        console.log("json load done");
        view.init(mydata);



    }

}

olympicModel.prototype.getobject = function(year) {

    for (let i = 0; i < this.mydata.length; i++) {
        if (this.mydata[i].year == year) {
            return (this.mydata[i]);
        }
    }

}