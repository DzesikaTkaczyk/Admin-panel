'use strict';

window.onload = function() {
	
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

}