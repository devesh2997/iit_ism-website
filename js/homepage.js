// Google Expando Method
// =====================================================

function googleExpandoToggle() {
  $(this).toggleClass('active');
  $(this).next().toggleClass('active');
  $expando_card = $('.google-expando__card');

  // ARIA
  $expando_card.attr('aria-hidden') === 'true' ? $expando_card.attr('aria-hidden', 'false') : $expando_card.attr('aria-hidden', 'true');
}


// Google Expando Event
// =====================================================

$('.google-expando__icon').on('click', function() {
  googleExpandoToggle.call(this);
});



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





  