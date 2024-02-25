let elDesc = document.querySelector("#elDescrizione");
let elScad = document.querySelector("#elScadenza");
let btnAdd = document.querySelector("#btnAdd");

function Item(descrizone, scadenza){
    this.descrizone = descrizone;
    this.scadenza = scadenza;
}

let listaItems = [];
function aggiungiItem(){
    let nuovoItem = new Item(elDesc.value, elScad.value);
    listaItems.push(nuovoItem);

    //sort by scadenza
    listaItems.sort((a,b)=>{
        return a.scadenza - b.scadenza;
    });

    card.innerHTML = "";
    listaItems.forEach(item => {
        card.innerHTML += `<li> ${item.descrizone} - scade tra: ${item.scadenza} giorni`;
    });
}





let card = document.querySelector("#card");
/****************************************************************************************
//Closure - simultates incapsulation - ***************to study******************************
/// a function inside another - nested functions

function stampaItems(){
    let mioParam = 10;
    function passaParametro(){
        return (mioParam * 2);
    }
    return passaParametro;
}
stampaItems(); //// similar to getter and setter and java
**********************************************************************************************/

btnAdd.addEventListener("click", stampaItems);
elScad.addEventListener("keypress",function(){
    if(event.keyCode == 13){
        btnAdd.click();
    }
})