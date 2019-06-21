'use strict';
window.onload = function() {

	var burger = document.getElementById('hamburger');

	function toggleMenu(visible) { 
	  document.querySelector('.mobile_menu').classList.toggle('show_mobile_menu', visible);
	}

	burger.addEventListener('click', function(e) {
	  e.preventDefault();
	  toggleMenu();

	});
}