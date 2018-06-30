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
	
		// on installing state
		if(sw.installing){
			trackInstalling(sw.installing);
		}
	
		// on updated found
		sw.addEventListener('updatefound', function (){
			trackInstalling(sw.installing);
		});
	}).catch((error) => {
		console.log("something went wrong", error);
	});
	// register sw
	function registerServiceWorker() {
	
		console.log("im here also");
		// register the service worker
		navigator.serviceWorker.register('./sw.js').then(function(sw) {
			// check service worker controller
			console.log('service worker registered');
			if(!navigator.serviceWorker.controller) return;
	
			// on waiting state
			if(sw.waiting){
				// updateIsReady(sw.waiting);
				sw.postMessage('message', {action: 'skipWaiting'});
				return;
			}
	
			// on installing state
			if(sw.installing){
				trackInstalling(sw.installing);
			}
	
			// on updated found
			sw.addEventListener('updatefound', function (){
				trackInstalling(sw.installing);
			});
		}).catch((error) => {
			console.log("something went wrong", error);
		});
	}
} 

// track sw state
function trackInstalling(worker) {
	worker.addEventListener('statechange', function(){
		if(worker.state === 'installed'){
			updateIsReady(worker);
		}
	});
}

// update app 
function updateIsReady(sw){
	// console.log('a new SW is ready to take over !');
	// sw.postMessage('message', {action: 'skipWaiting'});
	// pushUpdateFound();
}

// // push updates
// function pushUpdateFound() {
// 	$(".notify").fadeIn();
//   	console.log('sw found some updates.. !');
// }

// on message
// self.addEventListener('message', function(event){
// 	if(event.data.action == 'skipWaiting'){
// 		self.skipWaiting();
// 	}
// });


/*
|------------------------------------------
| INDEXED DB SECTION
|------------------------------------------
*/
// if (!window.indexedDB) {
//     console.log("Your browser doesn't support a stable version of IndexedDB");
// }

// // open database 
// function openDatabase(){
// 	// return db instances
// 	const DB_NAME 	= 'hadijahz';
// 	const database 	= indexedDB.open(DB_NAME, 1);

// 	// on error catch errors 
// 	database.onerror = (event) => {
// 		console.log('error opening web database');
// 		return false;
// 	};

// 	// check db version
// 	database.onupgradeneeded = function(event) {
// 	  	// listen for the event response
// 	  	var upgradeDB = event.target.result;

// 	  	// create an objectStore for this database
// 	  	var objectStore = upgradeDB.createObjectStore("currencies");
// 	};

// 	// return db instance
// 	return database;
// }

// // save to currencies object
// function saveToDatabase(data){
// 	// init database
// 	const db = openDatabase();
	
// 	// on success add user
// 	db.onsuccess = (event) => {

// 		// console.log('database has been openned !');
// 		const query = event.target.result;

// 	  	// check if already exist symbol
// 		const currency = query.transaction("currencies").objectStore("currencies").get(data.symbol);

// 		// wait for users to arrive
// 	  	currency.onsuccess = (event) => {
// 	  		const dbData = event.target.result;
// 	  		const store  = query.transaction("currencies", "readwrite").objectStore("currencies");

// 	  		if(!dbData){ 
// 	  			// save data into currency object
// 				store.add(data, data.symbol);
// 	  		}else{
// 	  			// update data existing currency object
// 				store.put(data, data.symbol);
// 	  		};
// 	  	}
// 	}
// }

// // fetch from web database
// function fetchFromDatabase(symbol, amount) {
// 	// init database
// 	const db = openDatabase();
	
// 	// on success add user
// 	db.onsuccess = (event) => {

// 		// console.log('database has been openned !');
// 		const query = event.target.result;

// 		// check if already exist symbol
// 		const currency = query.transaction("currencies").objectStore("currencies").get(symbol);

// 		// wait for users to arrive
// 	  	currency.onsuccess = (event) => {
// 	  		const data = event.target.result;
// 	  		// console.log(data);
// 	  		if(data == null){
// 	  			$(".error_msg").append(`
// 					<div class="card-feel">
// 		                <span class="text-danger">
// 		                	You are currently offline... check internet connectivity and try again.
// 		                </span>
// 					</div>
// 				`);

// 				// hide error message
// 				setTimeout((e) => {
// 					$(".error_msg").html("");
// 				}, 1000 * 3);

// 				// void
// 				return;
// 	  		}

// 			// console.log(data);
// 			// console.log(data);
// 			let pairs = symbol.split('_');
// 			let fr = pairs[0];
// 			let to = pairs[1];

// 			$(".results").append(`
// 				<div class="card-feel">
// 	                <h1 class="small text-center"> <b>${amount}</b> <b>${fr}</b> & <b>${to}</b> converted successfully !</h1>
// 					<hr />
// 					Exchange rate for <b>${amount}</b> <b>${fr}</b> to <b>${to}</b> is: <br /> 
// 					<b>${numeral(amount * data.value).format('0.000')}</b>
// 				</div>
// 			`);
// 	  	}
// 	}
// }

