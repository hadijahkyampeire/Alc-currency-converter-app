/**
* Author: Hadijah Kyampeire
*/

/*
|------------------------------------------
| SERVICE WORKER PART
|------------------------------------------
*/
// init page and register services worker
export const serviceWorker =() => {
	navigator.serviceWorker.register('./sw.js').then(function(sw) {
		// check service worker controller
		console.log('service worker registered');
		registerServiceWorker(); 
		if(!navigator.serviceWorker.controller) return;
	
		// on waiting state
		if(sw.waiting){
			// updateIsReady(sw.waiting);
			sw.postMessage('message', {action: 'skipWaiting'});
			return;
		}
	}).catch((error) => {
		console.log("something went wrong", error);
	});
	// register sw
	function registerServiceWorker() {
		navigator.serviceWorker.register('./sw.js').then(function(sw) {
			// check service worker controller
			console.log('service worker registered');
			if(!navigator.serviceWorker.controller) return;
			if(sw.waiting){
				// updateIsReady(sw.waiting);
				sw.postMessage('message', {action: 'skipWaiting'});
				return;
			}
		}).catch((error) => {
			console.log("something went wrong", error);
		});
	}
} 



