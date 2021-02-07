function getClosePrice(getTheData, theDate) {
    //function for getting the close price
    let closePrice = getTheData['Time Series (5min)'][theDate]['4. close'];
    //console.log(openPrice)
    return closePrice;
}

export default getClosePrice;