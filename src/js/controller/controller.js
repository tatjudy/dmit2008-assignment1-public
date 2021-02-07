
function StocksInfo(theData) {

    let MetaData = theData['Meta Data'];
    let TimeSeries = theData['Time Series (5min)'];

    let theSymbol = MetaData['2. Symbol'];
    let thePrice = theData['Time Series (5min)'][''];
    let theLatestDate;
    
    getSymbol(theData, MetaData);
    console.log(theSymbol);

    //gets the date
    getDate(theData);
    theLatestDate = getDate(theData);
    console.log(theLatestDate);
}


function getSymbol (getTheData, getTheMetaData) {
    console.log(getTheMetaData);
}

function getDate (getTheData) {
    //function for getting the latest date
    //sorts the dates in descending order
    //the time series data
    var timeSeriesDate = Object.keys(getTheData['Time Series (5min)']);
    
    //sort in descending order
    timeSeriesDate.sort(function (a,b) {
        a = new Date(a);
        b = new Date(b);
        return a>b ? -1 : a<b ? 1 : 0;
    });
    
    var latestDate = timeSeriesDate[0];
    var getVal = getTheData['Time Series (5min)'][latestDate];

    //return the latest date to the StocksInfo function above
    return latestDate;
}

export default StocksInfo;
export {getDate};
// An app that returns stock data. Users will use the app by entering a stock symbol into a single form input. Displayed will be a total of 7 pieces of data about the stock.