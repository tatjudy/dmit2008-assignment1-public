function getClosePrice(getTheData, theDate) {
    let closePrice = getTheData['Time Series (5min)'][theDate]['4. close'];
    //console.log(openPrice)
    return closePrice;
}

export default getClosePrice;