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



