const fromCurrency = document.getElementById("fromAmount");
const toCurrency = document.getElementById("toAmount");
const exchangeAmt = document.getElementById("amount").value;
const form = document.forms["form"];

const https = require('https');


function currency(element){

    const url = 'https://free.currencyconverterapi.com/api/v5/currencies';

    fetch(url).then(response=>{
        return response.json();
    }).then(data=>{
        
        for(let currency in data.results){
            const option = document.createElement('option');
            option.value = currency;
            option.textContent= currency;
            element.appendChild(option);
        }
    
    });
}


fromCurrency.addEventListener('onload', currency(fromCurrency));
toCurrency.addEventListener('onload', currency(toCurrency));

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    function convert(){
        const query = `${fromCurrency.value}_${toCurrency.value}`;
        const url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=ultra`;
    
        fetch(url).then(response=> {
            return response.json();
        }).then(data=>{
            var result = data * exchangeAmt;
            console.log(data);
        })
    }

});