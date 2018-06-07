function navigation_notices(no) {
	var name;
	switch(no){
		case 0:name="Short courses"; break;
		case 1:name="Exam/PhD"; break;
		case 2:name="Notices"; break;
		case 3:name="Seminar"; break;
		case 4:name="Other info"; break;
		default : name="Notices";

	}
	document.getElementById("notices").innerHTML ="<h3>"+ name+"</h3>";
	document.getElementById("notices-inner-stuff").innerHTML ="<h3>"+ "notices from database here"+"</h3>";
	
	
}

 function resizeit(obj) {
    obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
  }






var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function dialog_box(a,b,c){
a.onclick = function() {
    b.style.display = "block";

}
c.onclick = function() {
    b.style.display = "none";
}
window.onclick = function(event) {

    if (event.target == b) {
        b.style.display = "none";

    }
}
}




  



var btn = document.getElementById("annual-report");
var modal = document.getElementById('myModal');
var span = document.getElementById("close42");
dialog_box(btn,modal,span);


var btn2 = document.getElementById("governing-body");
var modal2 = document.getElementById('myModal2');
var span2 = document.getElementsByClassName("close244");

dialog_box(btn2,modal2,span2);

span2.onclick = function() {
    modal2.style.display = "none";
}

var btn = document.getElementById("academic-administration");
var modal = document.getElementById('myModal3');
var span = document.getElementsByClassName("close3");
dialog_box(btn,modal,span);







