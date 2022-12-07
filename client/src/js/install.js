// Getting install button by id
const btnInstall = document.getElementById("buttonInstall");

// Before installed, the install button will display.

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  btnInstall.style.display = "inline-block";
});

// The prompt will handle installation of the application, if cancelled,
// return. If not install and set install button display to none.

btnInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  btnInstall.style.display = "none";
});

// When the app is installed set the deferred prompt to null

window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
