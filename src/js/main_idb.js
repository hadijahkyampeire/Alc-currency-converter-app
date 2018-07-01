let dbPromise = idb.open('alc-conversion-db', 3, (upgradeDb) => {
    switch(upgradeDb.oldVersion) {
      case 0: 
        let keyValStore = upgradeDb.createObjectStore('keyval');
        keyValStore.put("whatsup", "hadijah");
      case 1:
        upgradeDb.createObjectStore('conversion', { keyPath: 'id' });
    }
  });

//   query database
  dbPromise.then((db) => {
    let index = db.transaction('conversion').objectStore('conversion');
    return index.getAll().then((extractions) => {
    console.log(extractions);

    myconversions = [];
    let set;
    for (i of extractions){
      myconversions.push(i.to);
      // console.log(myconversions);
      set = new Set(myconversions);
        }
        
        for(const j of set){
          // populate html
          document.getElementById('currencyTo').innerHTML += `<option value="${j}">${j}</option>`;
          document.getElementById('currencyFrom').innerHTML += `<option value="${j}">${j}</option>`;
          // console.log(j);
        }
    
  })
})


// a function to do the conversions

function Convert(){
  event.preventDefault();

  let selectBox = document.getElementById("currencyFrom");
  let selectBox1 = document.getElementById("currencyTo");
  let selectedValue = selectBox.options[selectBox.selectedIndex].value;
  let selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;
  
  // console.log("inside:"+selectedValue);
  let selectedSource = selectedValue;
  let selectedSource1 = selectedValue1;
  console.log(selectedSource);
  console.log(selectedSource1);

 

  dbPromise.then((db) => {
    let index = db.transaction('conversion').objectStore('conversion');
    return index.getAll().then((extractions) => {
    console.log(extractions);

    // access the conversion unit
    for (i of extractions){
      let id = selectedSource+"_"+selectedSource1;
      if (i.id == id){
         let amount = document.getElementById("amount");
         let amount_value = amount.value;
        total = amount_value * i.val;
        document.getElementById('results_val').innerHTML = `<h6 class="val text-left">${total}</h6>`;
      }
        }
    
  })
})
}