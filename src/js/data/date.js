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

export default getDate;