var olympicController = function olympicController(model, view) {
    this.model = model;
    this.view = view;


}

olympicController.prototype.init = function() {


    this.model.init(this.view);

    this.view.onClick = this.onClick.bind(this);



}

olympicController.prototype.onClick = function(e) {

    this.view.render(e.target.innerHTML);

}