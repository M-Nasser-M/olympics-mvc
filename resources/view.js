var olympicView = function olympicView(targetbtn, targettxt) {
    this.targetbtn = targetbtn;
    this.targettxt = targettxt;
    this.onClick = null;

}


olympicView.prototype.render = function render(year, data) {


    this.targettxt.innerHTML = " ";

    for (var i = 0; i < data.length; i++) {

        if (data[i].year == year) {
            var title = document.createElement("h3");
            title.classList += " my-5"
            var txtnode = document.createTextNode(data[i].country + "," + data[i].year);
            title.append(txtnode)
            this.targettxt.append(title);
            var para = document.createElement("P");
            var txtnode2 = document.createTextNode("you can check brief for " + data[i].country + " olympics at the following ");
            var link = document.createElement("a");
            link.setAttribute("href", data[i].link + data[i].year + "_Summer_Olympics");
            link.innerHTML = "link";
            para.append(txtnode2);
            para.append(link);
            this.targettxt.append(para);
        }



    }


}

olympicView.prototype.renderBtn = function(mydata) {


    for (let i = 0; i < this.mydata.length; i++) {
        let btn = document.createElement("button")
        btn.innerText = mydata[i].year;
        btn.classList += " btn btn-primary mx-2 my-2 ";
        btn.addEventListener("click", this.onClick);


        this.targetbtn.appendChild(btn);

    }

}

olympicView.prototype.init = function(mydata) {


    this.mydata = mydata;

    this.renderBtn(mydata);



}