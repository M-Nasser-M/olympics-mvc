var olympicView = function olympicView(targetbtn, targettxt) {
    this.targetbtn = targetbtn;
    this.targettxt = targettxt;
    this.onClick = null;

}


olympicView.prototype.render = function render(data) {

    console.log(this.targettxt)
    this.targettxt.innerHTML = " beeeb beeeb ";


}

olympicView.prototype.renderBtn = function(mydata) {


    for (let i = 0; i < this.mydata.length; i++) {
        let btn = document.createElement("button")
        btn.innerText = mydata[i].year;
        btn.classList += " btn btn-primary m-1";
        btn.addEventListener("click", this.onClick);
        console.log(this.onClick);

        this.targetbtn.appendChild(btn);

    }

}

olympicView.prototype.init = function(mydata) {


    this.mydata = mydata;

    this.renderBtn(mydata);



}