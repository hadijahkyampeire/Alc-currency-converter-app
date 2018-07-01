import idb from 'idb';

if (window.indexedDB) {
    (event) => {
        console.error(event);
    }
}

// # Conversions
// fetch form https://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP,PHP_USD

let initials = ["UGX","KES","USD"];
let data = [];
let data1 = [];

for(let i =0; i< initials.length; i++){
  for(let j =i; j < initials.length; j++){
      data.push(initials[i]+"_"+initials[j] );
      data1.push(initials[j]+"_"+initials[i] );
    }
  }
      let l;
      for (let k of data){
        for (l of data1){
        }
let url_conversion = `https://free.currencyconverterapi.com/api/v5/convert?q=${k},${l}`;

let request = new Request(url_conversion);
fetch(request)
.then((response) => response.json())
.then((fetched_data) => {

  let dbPromise = idb.open('alc-conversion-db', 3, function(upgradeDb) {
    switch(upgradeDb.oldVersion) {
      case 0: 
        let keyValStore = upgradeDb.createObjectStore('keyval');
        keyValStore.put("whatsup", "hadijah");
      case 1:
        upgradeDb.createObjectStore('conversion', { keyPath: 'id' });
    }
  });

        // add currencies to "currency"
        dbPromise.then(function(db) {
            let tx = db.transaction('conversion', 'readwrite');
            let conversionStore = tx.objectStore('conversion');
            let result = Object.values(fetched_data.datas);
            // console.log(data);
            for (const i of result){
            // console.log(i);
            conversionStore.put(i);
            }
            return tx.complete;
        });

})
  }
// IndexDB functions
  (function() {
    function proxyProperties(ProxyClass, targetProp, properties) {
        properties.forEach(function(prop) {
            Object.defineProperty(ProxyClass.prototype, prop, {
                get: function() {
                    return this[targetProp][prop];
                },
                set: function(val) {
                    this[targetProp][prop] = val;
                }
            });
        });
    }

    function Index(index) {
        this._index = index;
    }


    proxyProperties(Index, '_index', [
        'name',
        'keyPath',
        'multiEntry',
        'unique'
    ]);
});