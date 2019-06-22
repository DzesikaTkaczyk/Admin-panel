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

	var wallet = document.getElementById('wallet_list');

	function walletMenu(visible) { 
	  document.querySelector('.wallet_click').classList.toggle('show_wallet_click', visible);
	}

	wallet.addEventListener('click', function(e) {
	  e.preventDefault();
	  walletMenu();

	});
}