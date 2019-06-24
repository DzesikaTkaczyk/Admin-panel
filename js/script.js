'use strict';

window.addEventListener ? 
window.addEventListener("load",script_js,false) : 
window.attachEvent && window.attachEvent("onload",script_js);

function script_js () {

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

	var ctx = document.getElementById('myChart').getContext('2d');

	var chart = new Chart(ctx, {
	    // 1
	    type: 'bar',
	    data: {
	        // 2
	        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
	        // 3
	        datasets: [{
	            // 4
	            label: "Signups",
	            // 5
	            backgroundColor: '#8DBEC8',
	            borderColor: '#8DBEC8',
	            // 6
	            data: [ 350, 210, 241, 304, 426, 396, 272, 279, 321 ],
	        },
	        {
	            label: "FTD",
	            backgroundColor: '#F29E4E',
	            borderColor: '#F29E4E',
	            data: [ 416, 172, 311, 260, 437, 111, 250, 544, 363 ],
	        },
	        {
	            label: "Earned",
	            backgroundColor: '#71B374',
	            borderColor: '#71B374',
	            data: [ 359, 149, 268, 390, 267, 341, 13, 238, 348, 348 ],
	            // 7
	            hidden: true,
	        }]
	    },
	});
}
