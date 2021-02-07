// import after your code checks out
import stockTickerModel from './models/ticker.js';
import displayInfo from './view/view.js';
import StocksInfo from './controller/controller.js';
import getDate from './controller/controller.js';

const form = document.querySelector('.search-api');
let searchBtn = document.querySelector('button');
let error = document.querySelector('.error');

searchBtn.addEventListener('click', function(event) {
    let symbol = document.querySelector('form input').value;
    let apiBaseUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=O4H84DXOG6X22SJ5`;

    //console log for testing
    console.log(apiBaseUrl);
    console.log(stockTickerModel);
    //displayInfo();
    //prevents refresh
    validate(symbol);
    if (validate(symbol) === true) {
        console.log(symbol);
        stockTickerModel(apiBaseUrl, symbol);

        
        displayInfo(symbol.toUpperCase(), );
    }
    else {
        console.log('fail');
    }
    clearInput (symbol);
    event.preventDefault();
});

function clearInput (input) {
    document.querySelector('form input').value = '';
}

(function() {
    const model = new stockTickerModel(symbol);
    const view = new displayInfo();
})

function validate () {
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