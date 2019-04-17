export const register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./serviceworker.js")
        .then(
          registration => console.log("Registered! 🐼", registration.scope),
          err => console.log("ServiceWorker registration failed: ", err)
        );
    });
  }
};
