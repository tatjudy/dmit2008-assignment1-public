import getDate from "../data/date.js";

let displayStocks,
col1,
col2,
col3,
col4,
col5,
col6,
col7;

let symbolHeading,
currentOpenPriceHeading,
currentClosePriceHeading,
dateHeading,
timezoneHeading,
volumeHeading,
lastRefreshedHeading;

let theStockSymbol,
stockSymbol,
currentOpenPrice,
currentClosePrice,
date,
timeZone,
volume,
lastRefreshed;

let stockSymbolHeadingText,
currentOpenPriceHeadingText,
currentClosePriceHeadingText,
dateHeadingText,
timeZoneHeadingText,
volumeHeadingText,
lastRefreshedHeadingText;

let mainContent = document.querySelector('main');

function createElements(symbol, theDate, theData) {
    //function to create the elements and adding classes
    displayStocks = document.createElement('div');
    col1 = document.createElement('div');
    col2 = document.createElement('div');
    col3 = document.createElement('div');
    col4 = document.createElement('div');
    col5 = document.createElement('div');
    col6 = document.createElement('div');
    col7 = document.createElement('div');

    symbolHeading = document.createElement('h2');
    currentOpenPriceHeading = document.createElement('h2');
    currentClosePriceHeading = document.createElement('h2');
    dateHeading = document.createElement('h2');
    timezoneHeading = document.createElement('h2');
    volumeHeading = document.createElement('h2');
    lastRefreshedHeading = document.createElement('h2');

    stockSymbol = document.createElement('p');
    currentOpenPrice = document.createElement('p');
    currentClosePrice = document.createElement('p');
    date = document.createElement('p');
    timeZone = document.createElement('p');
    volume = document.createElement('p');
    lastRefreshed = document.createElement('p');

    stockSymbolHeadingText = document.createTextNode('Stock Symbol');
    currentOpenPriceHeadingText = document.createTextNode('Open Price');
    currentClosePriceHeadingText = document.createTextNode('Close Price');
    dateHeadingText = document.createTextNode('Date');
    timeZoneHeadingText = document.createTextNode('Time Zone');
    volumeHeadingText = document.createTextNode('Volume');
    lastRefreshedHeadingText = document.createTextNode('Last Refreshed');

    //add classes
    displayStocks.classList.add('display-stocks');
    col1.classList.add('col-1');
    col2.classList.add('col-2');
    col3.classList.add('col-3');
    col4.classList.add('col-4');
    col5.classList.add('col-5');
    col6.classList.add('col-6');
    col7.classList.add('col-7');

    symbolHeading.classList.add('stock-symbol-heading');
    currentOpenPriceHeading.classList.add('current-open-price-heading');
    currentClosePriceHeading.classList.add('current-close-price-heading');
    dateHeading.classList.add('date-heading');
    timezoneHeading.classList.add('time-zone');
    volumeHeading.classList.add('volume');
    lastRefreshedHeading.classList.add('last-refreshed');

    stockSymbol.classList.add('stock-symbol');
    currentOpenPrice.classList.add('current-price');
    currentClosePrice.classList.add('current-price');
    date.classList.add('date');
    timeZone.classList.add('timezone');
    volume.classList.add('volume');
    lastRefreshed.classList.add('last-refreshed');
}

function displayInfo (data, symbol, theDate, openPrice, closePrice, TimeZone, Volume, LastRefreshed) {
    //function to build the document fragment, piece it together.

    //gets the latest date from function in controller
    let theLatestDate = document.createTextNode(getDate(data));
    let theOpenPrice = document.createTextNode(openPrice);
    let theClosePrice = document.createTextNode(closePrice)
    let theTimeZone = document.createTextNode(TimeZone);
    let theVolume = document.createTextNode(Volume);
    let theLastRefreshed = document.createTextNode(LastRefreshed);

    //for testing
    //console.log(theLatestDate);

    createElements(symbol, theDate, data);
    //build document fragment
    mainContent.appendChild(displayStocks);

    displayStocks.appendChild(col1);
    displayStocks.appendChild(col2);
    displayStocks.appendChild(col3);
    displayStocks.appendChild(col4);
    displayStocks.appendChild(col5);
    displayStocks.appendChild(col6);
    displayStocks.appendChild(col7);

    col1.appendChild(symbolHeading);
    col2.appendChild(currentOpenPriceHeading);
    col3.appendChild(currentClosePriceHeading);
    col4.appendChild(dateHeading);
    col5.appendChild(timezoneHeading);
    col6.appendChild(volumeHeading);
    col7.appendChild(lastRefreshedHeading);

    col1.appendChild(stockSymbol);
    col2.appendChild(currentOpenPrice);
    col3.appendChild(currentClosePrice);
    col4.appendChild(date);
    col5.appendChild(timeZone);
    col6.appendChild(volume);
    col7.appendChild(lastRefreshed);
    theStockSymbol = document.createTextNode(symbol);

    symbolHeading.append(stockSymbolHeadingText);
    currentOpenPriceHeading.append(currentOpenPriceHeadingText);
    currentClosePriceHeading.append(currentClosePriceHeadingText);
    dateHeading.append(dateHeadingText);
    timezoneHeading.append(timeZoneHeadingText);
    volumeHeading.append(volumeHeadingText);
    lastRefreshedHeading.append(lastRefreshedHeadingText);

    stockSymbol.appendChild(theStockSymbol);
    date.appendChild(theLatestDate);
    currentOpenPrice.appendChild(theOpenPrice);
    currentClosePrice.appendChild(theClosePrice);
    timeZone.appendChild(theTimeZone);
    volume.appendChild(theVolume);
    lastRefreshed.appendChild(theLastRefreshed);
}

export default displayInfo;