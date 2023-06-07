const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // stash the event so it can be triggered later.
    deferredPrompt = event;

    // update UI to notify user they can add to home screen
    butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // hide our user interface that shows our A2HS button
    butInstall.style.display = 'none';

    // Show the prompt
    if (deferredPrompt) {
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const choiceResult = await deferredPrompt.userChoice;

        deferredPrompt = null;

        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
    }
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
});