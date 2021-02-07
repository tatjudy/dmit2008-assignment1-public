import displayInfo from '../view/view.js';
import getDate from "../data/date.js";
import getSymbol from "../data/symbol.js";
import getOpenPrice from "../data/openprice.js";
import getClosePrice from "../data/closeprice.js";
import getTheVolume from "../data/volume.js";
import getTheTimeZone from "../data/timezone.js";
import getLastRefreshed from "../data/lastrefreshed.js";

function StocksInfo(data) {
    let theDate = getDate(data);
    let symbol = getSymbol(data);
    let openPrice = getOpenPrice(data, theDate);
    let closePrice = getClosePrice(data, theDate)
    let volume = getTheVolume(data, theDate);
    let timeZone = getTheTimeZone(data);
    let lastRefreshed = getLastRefreshed(data);

    getTheVolume(data, theDate);
    getTheTimeZone(data);
    getLastRefreshed(data);

    displayInfo(data, symbol.toUpperCase(), theDate, openPrice, closePrice, timeZone, volume, lastRefreshed);
}

export default StocksInfo;