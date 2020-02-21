// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js');
}

// Code to handle install prompt on desktop
let deferredPrompt;
const btnPwa = document.getElementById('btn-pwa');
const closePwa = document.getElementById('close-pwa');
const addBtn = document.querySelector('.add-button');

function registerSW(e) {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;

	setTimeout(function () {
		// Update UI to notify the user they can add to home screen
		btnPwa.style.visibility = 'visible';
	}, 5000);

	closePwa.addEventListener('click', function (e) {
		e.preventDefault();
		btnPwa.style.visibility = 'hidden';
		btnPwa.style.display = 'none';
	})

	addBtn.addEventListener('click', (e) => {
		// hide our user interface that shows our A2HS button
		addBtn.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			} else {
				console.log('User dismissed the A2HS prompt');
			}
			deferredPrompt = null;
		});
	});
}

window.addEventListener('beforeinstallprompt', (e) => {
	if (/Mobile|mobile|Android|android|Iphone|iphone|Ios|ios/.test(navigator.userAgent)) {
		this.registerSW(e);
	}
});