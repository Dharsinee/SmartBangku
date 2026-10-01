self.addEventListener("install", event => {
    console.log("SmartBangku Service Worker installed.");
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    console.log("SmartBangku Service Worker activated.");
});

self.addEventListener("notificationclick", event => {
    event.notification.close();

    event.waitUntil(
        clients.openWindow("https://dharsinee.github.io/SmartBangku/")
    );
});
