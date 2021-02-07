Stock Ticker Application

Using the Alpha Vantage API, this app takes in a single input value, a stock symbol, and outputs 7 pieces of information about that stock.

Alpha Vantage Documentation: https://www.alphavantage.co/documentation/

It outputs:
-Stock symbol
-Open Price
-Close Price
-Date
-Time Zone
-Volume
-Last Refreshed

Plan:
- Build the html first, to display the data
- Get the data, console log for testing
- then input the data into html file

- Using this url: https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=thesymbol&interval=5min&apikey=O4H84DXOG6X22SJ5
    'thesymbol' = replace with the actual stock symbol
        ex. GOOGL for google, MSFT for microsoft

This application uses Node Modules. To install, go to terminal and make sure you are in the root of your directory.
Enter in these commands:
1. npm init
    - Input the information needed for the package.json
2. npm install -D parcel-bundler
    - This installs the parcel bundler
3. npm install

Here is the link to the live site: https://dmit2008-assignment1-public.netlify.app/
