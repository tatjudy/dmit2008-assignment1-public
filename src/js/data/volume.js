function getTheVolume(getTheData, theDate) {
    //function for getting the volume
    let volume = getTheData['Time Series (5min)'][theDate]['5. volume'];
    //console.log(volume)
    return volume;
}

export default getTheVolume;