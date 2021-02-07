import StocksInfo from "../controller/controller.js";

//import searchStocks from '../controller/controller.js';
function stockTickerModel(url, symbol) {
    //this.apiBaseUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=O4H84DXOG6X22SJ5`;
    
    // this.init = function () {
    //     const result = this.query('`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=O4H84DXOG6X22SJ5`').then(res => res)
    //     return result;
    // }

    //get the data
      fetch(url)
        .then(res => {
            return res.json()
        })
        .then((data) => {
            //searchStocks(data);
            //console.log(data)
            // const theData = JSON.parse(data);
            StocksInfo(data);
            return data;
            //console.log(data.[meta data]);
        })  
    //getTheData(url, symbol);
        return data;
}

export default stockTickerModel;    
      // fetch(url)
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then((data) => {
    //         //searchStocks(data);
    //         //console.log(data)
    //         // const theData = JSON.parse(data);
    //         console.log(data);
    //         console.log(content['Meta Data']);
    //         //console.log(data.[meta data]);
    //     })  
// function makeRequest(url, symbol) {
//     return new Promise((resolve, reject) => {
//         console.log('make request to api');
//         if (url === symbol) {
//             resolve('success');
//         } else {
//             reject('invalid api'); 
//             console.log(location);
//         }
//     });
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('processing request');
//         resolve('info');
//     });
// }

// async function getTheData (url) {
//     try {
//         const response = await makeRequest(url, symbol);
//         console.log('response recieved');
//         const processedResponse = await processRequest(response);
//         console.log(processedResponse);
//     } catch (err) {
//         console.log(err);
//     }
// }