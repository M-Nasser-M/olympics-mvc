var olympicController = function olympicController(model, view) {
    this.model = model;
    this.view = view;


}

olympicController.prototype.init = function() {


    this.model.init();

    setTimeout(function() {

        this.view.init(this.model.mydata);
    }, 1000);


    this.view.onClick = this.onClick.bind(this);



}

olympicController.prototype.onClick = function(e) {


    this.view.render(e.target.innerHTML, this.model.mydata);

}