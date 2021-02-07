import StocksInfo from "../controller/controller.js";
//import searchStocks from '../controller/controller.js';
function stockTickerModel(url) {
    //get the data
      fetch(url)
        .then(res => {
            return res.json()
        })
        .then((data) => {
            //gets the date

            StocksInfo(data);
            return data;
        })  
}

export default stockTickerModel;    
