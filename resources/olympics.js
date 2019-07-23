//model initialization
var model = new olympicModel();


//view initialization
var targetElement = document.getElementById("content");
var targetElement2 = document.getElementById("contenttxt");
var view = new olympicView(targetElement, targetElement2);


//controller initialization
var controller = new olympicController(model, view);
controller.init();