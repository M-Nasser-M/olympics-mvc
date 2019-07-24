var olympicModel = function olympicModel() {

    this.mydata = null;

}

olympicModel.prototype.init = function() {


    var jsonUrl = 'https://api.myjson.com/bins/dxbgz';
    var request = new XMLHttpRequest();
    request.open('GET', jsonUrl);
    request.responseType = 'json';
    request.send();
    var self = this;

    return new Promise((resolve, reject) => {
        request.onload = function() {


            self.mydata = request.response;
            console.log("json load done");
            resolve(request);



        }

        request.onerror = function() {


            reject(request);

        }
    });








}