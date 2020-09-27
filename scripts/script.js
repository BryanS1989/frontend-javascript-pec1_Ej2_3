/*******************************************************************/
/*                         GLOBAL CONSTANTS                        */
/*******************************************************************/
// API key
const API_KEY = '7d9e5a83fc27579c5a91aebb';

// Get Select elements
const CURRENCY_ELEMENT_ONE = document.getElementById('currency-one');
const CURRENCY_ELEMENT_TWO = document.getElementById('currency-two');

// Get input elements
const AMOUNT_ELEMENT_ONE = document.getElementById('amount-one');
const AMOUNT_ELEMENT_TWO = document.getElementById('amount-two');

// Get Rate (div) element
const RATE_ELEMENT = document.getElementById('rate');

// Get button element
const SWAP_BUTTON = document.getElementById('swap');



/*******************************************************************/
/*                           FUNCTIONS                             */
/*******************************************************************/
// Fetch exchange-rate-API and updates the DOM
function calculate() {
    
    const CURRENCY_ONE = CURRENCY_ELEMENT_ONE.value;
    const CURRENCY_TWO = CURRENCY_ELEMENT_TWO.value;

    // GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${CURRENCY_ONE}`)
        .then((response) => {
            response.json()
                .then((data)=>{
                    const RATE = data.conversion_rates[CURRENCY_TWO];

                    RATE_ELEMENT.innerText = `1 ${CURRENCY_ONE} = ${RATE} ${CURRENCY_TWO}`;

                    AMOUNT_ELEMENT_TWO.value = (parseInt(AMOUNT_ELEMENT_ONE.value) * RATE).toFixed(2);
                    
                    //console.log(RATE);
                    //console.log(data);
                });
        });

    //console.log(CURRENCY_ONE, CURRENCY_TWO);
    //console.log('RAN');
    /*
    // Fetch json
    fetch ('./files/items.json')
        .then( (response) => {
            //console.log(response);
            
            // Get data
            response.json()
                .then( (data) => {
                    //console.log(data);

                    // Replace body with first item text
                    document.body.innerHTML = data[0].text;
                });
        });
    */
    /*
    fetch('items.json', {
        * 
            Methods:
                'GET'       -> Get data from a server
                'POST'      -> Save data on a server
                'PUT'       -> Update data on a server
                'DELETE'    -> Delete data from a server
        *
        method: 'POST',
        headers: {
            'Content-Type: application/json'
        }
    });
    */

}



/*******************************************************************/
/*                        EVENT LISTENERS                          */
/*******************************************************************/
CURRENCY_ELEMENT_ONE.addEventListener('change', () => {
    calculate();
});
CURRENCY_ELEMENT_TWO.addEventListener('change', () => {
    calculate();
});

AMOUNT_ELEMENT_ONE.addEventListener('input', () => {
    calculate();
});
AMOUNT_ELEMENT_TWO.addEventListener('input', () => {
    calculate();
});

SWAP_BUTTON.addEventListener('click', () => {
    var currencyElemOne = CURRENCY_ELEMENT_ONE.value;

    CURRENCY_ELEMENT_ONE.value = CURRENCY_ELEMENT_TWO.value;
    CURRENCY_ELEMENT_TWO.value = currencyElemOne;

    calculate();
});


