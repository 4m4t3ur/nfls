
$(document).ready(function() {
	
	// check if JS is working
	$('html').addClass('js');
	
	// create the mobile navigation
	$(function () {
		$(".mainMenu").tinyNav({
			active: 'current_page_item', // String: Set the "active" class
		});
	});

	// make the sun go around			
	var angle =0;
	setInterval(function(){
			angle+=1;
		 $("#logo").rotate(angle);
	},100);
});
