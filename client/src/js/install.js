const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";

  butInstall.addEventListener("click", async () => {
    event.prompt();
    butInstall.setAttribute("hidden", true);
  });
});

window.addEventListener("appinstalled", (event) => {
  console.log("App Installed");
});
