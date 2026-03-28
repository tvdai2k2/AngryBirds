const filesToCache = [
	"index.html",
	"AngryBirds.json",
	"03.png",
	"AngryBirdsFavIcon_16x16.png",
	"01-1.png",
	"02.png",
	"AngryBirdsGame.htm",
	"AngryBirdsGame.js",
	"AngryBirdsShare.png"
];

const staticCacheName = "angrybirds-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});