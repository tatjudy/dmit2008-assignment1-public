function getTheTimeZone (getTheData) {
    //function for getting the time zone
    let timeZone = getTheData['Meta Data']['6. Time Zone'];
    // console.log(timeZone);
    return timeZone;
}

export default getTheTimeZone;