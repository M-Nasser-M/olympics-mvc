var model = new olympicModel();
var targetElement = document.getElementById("content");

var targetElement2 = document.getElementById("contenttxt");
var view = new olympicView(targetElement, targetElement2);
var controller = new olympicController(model, view);
controller.init();