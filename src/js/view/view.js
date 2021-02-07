import getDate from "../controller/controller.js";

let displayStocks,
col1,
col2,
col3;

let symbolHeading,
currentPriceHeading,
dateHeading;

let theStockSymbol,
stockSymbol,
currentPrice,
date;

let stockSymbolHeadingText,
currentPriceHeadingText,
dateHeadingText;

let mainContent = document.querySelector('main');

function createElements(symbol, theDate, theData) {
    //let symbol = document.querySelector('form > input').value;
    //create elements
    //getDate(theData);
    displayStocks = document.createElement('div');
    col1 = document.createElement('div');
    col2 = document.createElement('div');
    col3 = document.createElement('div');

    symbolHeading = document.createElement('h2');
    currentPriceHeading = document.createElement('h2');
    dateHeading = document.createElement('h2');

    stockSymbol = document.createElement('p');
    currentPrice = document.createElement('p');
    date = document.createElement('p');

    stockSymbolHeadingText = document.createTextNode('Stock Symbol');
    currentPriceHeadingText = document.createTextNode('Current Price');
    dateHeadingText = document.createTextNode('Date');

    let getTheDate = document.createTextNode(theDate);

    //add classes
    displayStocks.classList.add('display-stocks');
    col1.classList.add('col-1');
    col2.classList.add('col-2');
    col3.classList.add('col-3');

    symbolHeading.classList.add('stock-symbol-heading');
    currentPriceHeading.classList.add('current-price-heading');
    dateHeading.classList.add('date-heading');

    stockSymbol.classList.add('stock-symbol');
    currentPrice.classList.add('current-price');
    date.classList.add('date');
    
    //build document fragment
    mainContent.appendChild(displayStocks);

    displayStocks.appendChild(col1);
    displayStocks.appendChild(col2);
    displayStocks.appendChild(col3);

    col1.appendChild(symbolHeading);
    col2.appendChild(currentPriceHeading);
    col3.appendChild(dateHeading);

    col1.appendChild(stockSymbol);
    col2.appendChild(currentPrice);
    col3.appendChild(date);
    theStockSymbol = document.createTextNode(symbol);

    symbolHeading.append(stockSymbolHeadingText);
    currentPriceHeading.append(currentPriceHeadingText);
    dateHeading.append(dateHeadingText);

    stockSymbol.appendChild(theStockSymbol);
    date.appendChild(getTheDate);
}

function displayInfo (symbol, theDate, data) {
    createElements(symbol, theDate, data);
}

export default displayInfo;