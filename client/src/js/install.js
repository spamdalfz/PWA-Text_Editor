const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // stash the event so it can be triggered later.
    deferredPrompt = event;

    // update UI to notify user they can add to home screen
    butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    // console.log(promptEvent)
    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    console.log('install hit')
    window.deferredPrompt = null;
}); 