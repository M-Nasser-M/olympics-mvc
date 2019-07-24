var olympicController = function olympicController(model, view) {
    this.model = model;
    this.view = view;


}

olympicController.prototype.init = async function() {


    await this.model.init().catch(x => console.error("an error occured" + x));
    this.view.init(this.model.mydata);



    this.view.onClick = this.onClick.bind(this);



}

olympicController.prototype.onClick = function(e) {


    this.view.render(e.target.innerHTML, this.model.mydata);

}