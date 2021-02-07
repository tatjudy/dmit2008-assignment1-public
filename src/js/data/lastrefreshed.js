function getLastRefreshed(getTheData) {
    //function for getting when stock data was last refreshed
    let lastRefreshed = getTheData['Meta Data']['3. Last Refreshed'];
    //console.log(lastRefreshed);
    return lastRefreshed;
}

export default getLastRefreshed;