const fromCurrency = document.getElementById("fromAmount");
const toCurrency = document.getElementById("toAmount");
const exchangeAmt = document.getElementById("amount");
const result = document.getElementById("result");
const form = document.forms["form"];


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
      
    let query = `${fromCurrency.value}_${toCurrency.value}`;
      
    let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=ultra`;

    fetch(url).then(response=>{
        return response.json();
    }).then(data=>{
        const calc = data[query];
        const amt = exchangeAmt.value * calc;
        
        result.value = amt;

        console.log(amt);
    })


});