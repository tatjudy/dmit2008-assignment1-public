function getLastRefreshed(getTheData) {
    let lastRefreshed = getTheData['Meta Data']['3. Last Refreshed'];
    //console.log(lastRefreshed);
    return lastRefreshed;
}

export default getLastRefreshed;