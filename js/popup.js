'use strict';

window.addEventListener ? 
window.addEventListener("load",popup_js,false) : 
window.attachEvent && window.attachEvent("onload",popup_js);

function popup_js () {
	
	function closeModal() {
	  document.getElementById('overlay').classList.remove('show')
	}

	document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
	  btn.addEventListener('click', function(e) {
	    e.preventDefault()
	    closeModal()
	  })
	})

	document.querySelector('#overlay').addEventListener('click', function(e) {
	  if(e.target === this) {
	    closeModal()
	  }
	})

	document.addEventListener('keyup', function(e) {
	  if(e.keyCode === 27) {
	    closeModal()
	  }
	})


	function openModal(modal) {
		document.querySelectorAll('#overlay > *').forEach(function(modal) {
		  	modal.classList.remove('show')
		})
		document.querySelector('#overlay').classList.add('show')
		document.querySelector(modal).classList.add('show')
	}

	var chat = document.getElementById('chat-on');

	chat.addEventListener('click', function(e) {
	  e.preventDefault();
	  openModal('#chatModal');

	});

	var login = document.getElementById('login-on');

	login.addEventListener('click', function(e) {
	  e.preventDefault();
	  openModal('#loginModal');

	});

	var quit = document.getElementById('quit-on');

	quit.addEventListener('click', function(e) {
	  e.preventDefault();
	  openModal('#quitModal');

	});

	var addurl = document.getElementById('add-url');

	/*addurl.addEventListener('click', function(e) {
	  e.preventDefault();
	  openModal('#addUrlModal');

	});

	var addurl2 = document.getElementById('add-url2');

	addurl2.addEventListener('click', function(e) {
	  e.preventDefault();
	  openModal('#addUrlModal');

	});*/

}