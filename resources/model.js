var olympicModel = function olympicModel() {

    this.mydata = null;

}

olympicModel.prototype.init = function(view) {


    var jsonUrl = 'https://api.myjson.com/bins/dxbgz';
    var request = new XMLHttpRequest();
    request.open('GET', jsonUrl, true);
    request.responseType = 'json';
    request.send();
    var self = this;

    request.onload = function() {

        self.mydata = request.response;
        console.log("json load done");
        view.init(self.mydata);


    }



}