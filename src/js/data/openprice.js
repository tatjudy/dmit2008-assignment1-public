function getOpenPrice(getTheData, theDate) {
    let openPrice = getTheData['Time Series (5min)'][theDate]['1. open'];
    //console.log(openPrice)
    return openPrice;
}

export default getOpenPrice;