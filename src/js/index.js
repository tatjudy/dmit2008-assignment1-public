// import after your code checks out
import stockTickerModel from './models/ticker.js';

let searchBtn = document.querySelector('button');
let stockDisplay = document.querySelector('.display-stocks');
let resetBtn = document.querySelector('.reset');

searchBtn.addEventListener('click', function(event) {
    //event listener for the search btn
    let symbol = document.querySelector('form input').value;
    let apiBaseUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=O4H84DXOG6X22SJ5`;

    
    //displayInfo();
    validate(symbol);
    if (validate(symbol) === true) {
        //console.log(symbol);
        stockTickerModel(apiBaseUrl);
        //makes the btn visible
        resetBtn.classList.remove('hidden');
    }
    else {
        console.log('fail');
    }

    //resets the form
    clearInput (symbol);
    //prevents refresh
    event.preventDefault();
});

//event listener for reseting form
resetBtn.addEventListener('click', function(event) {
    //function for removing content when reset is clicked
    let stockDisplay = document.querySelector('.display-stocks');
    let content = document.querySelector('main');

    if (content.contains(stockDisplay)) {
        removeElements(content, stockDisplay);
        resetBtn.classList.add('hidden');
    }

    event.preventDefault();
});

function clearInput (input) {
    document.querySelector('form input').value = '';
}


function validate () {
    //function for validation
    //still need to include validation if api doesn't exist
    let theInputSymbol = document.querySelector('form input');
    if (theInputSymbol.value === "") {
        document.querySelector('.error').innerText = 'Please enter a stock symbol.'
        return false;
    }
    else if (theInputSymbol.value !== '') {
        document.querySelector('.error').innerText = ''
        return true;
    }
}

const removeElements = function (theParent, theUnwantedContent) {
    //function removes elements
    theParent.remove(theUnwantedContent);
  }