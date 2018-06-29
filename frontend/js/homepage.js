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


function dialog_box(asmall,a,b,c){
	
asmall.onclick = function() {
    b.style.display = "block";

}

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



var btnsmall = document.getElementById("annual-reportsmall");
var btn = document.getElementById("annual-report");
var modal = document.getElementById('myModal');
var span = document.getElementById("close42");
dialog_box(btnsmall,btn,modal,span);

var btnsmall = document.getElementById("governing-bodysmall");
var btn = document.getElementById("governing-body");
var modal = document.getElementById('myModal2');
var span = document.getElementById("close244");
dialog_box(btnsmall,btn,modal,span);

var btnsmall = document.getElementById("academic-administrationsmall");
var btn = document.getElementById("academic-administration");
var modal = document.getElementById('myModal3');
var span = document.getElementById("close3");
dialog_box(btnsmall,btn,modal,span);

var btnsmall = document.getElementById("general-administrationsmall");
var btn = document.getElementById("general-administration");
var modal = document.getElementById('myModal4');
var span = document.getElementById("close4");
dialog_box(btnsmall,btn,modal,span);

var btnsmall = document.getElementById("research-awardsmall");
var btn = document.getElementById("research-award");
var modal = document.getElementById('myModal5');
var span = document.getElementById("close5");
dialog_box(btnsmall,btn,modal,span);

var btnsmall = document.getElementById("collaborationsmall");
var btn = document.getElementById("collaboration");
var modal = document.getElementById('myModal6');
var span = document.getElementById("close6");
dialog_box(btnsmall,btn,modal,span);

var btnsmall = document.getElementById("r-d-projectsmall");
var btn = document.getElementById("r-d-project");
var modal = document.getElementById('myModal7');
var span = document.getElementById("close7");
dialog_box(btnsmall,btn,modal,span);

var btnsmall = document.getElementById("consultancy-projectssmall");
var btn = document.getElementById("consultancy-projects");
var modal = document.getElementById('myModal8');
var span = document.getElementById("close8");
dialog_box(btnsmall,btn,modal,span);