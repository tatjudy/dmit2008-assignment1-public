function getTheTimeZone (getTheData) {
    let timeZone = getTheData['Meta Data']['6. Time Zone'];
    console.log(timeZone);
    return timeZone;
}

export default getTheTimeZone;