//-------------------------------------------------------TO DISPLAY A GRAPH INTO THE CANVAS-----------------------------------------------------------------------------------------//
const cxt = document.getElementById('minigraph').getContext('2d');
const minigraph = new Chart(cxt, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'USD/AUD',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

//----------------------------------------------------TO GET CURRENT DATE IN CORRECT FORMAT FOR API---------------------------------------------------------------//

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;

if (day < 10) day = "0" + day;
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate); // YYYY-MM-DD

//------------------------------------------------------TO GET YESTERDAYS DATE FOR COMPARISON-------------------------------------------------------------------------//

//previous attempt
// let yesterdaysDate = new Date(date) 
// yesterdaysDate.setDate(yesterdaysDate.getDate()-1)
// console.log(yesterdaysDate);
// console.log(yesterdaysDate.getDate());
// console.log(yesterdaysDate.getMonth()+1);
// console.log(yesterdaysDate.getFullYear());
// let ydate = `${yesterdaysDate.getFullYear()}-${yesterdaysDate.getMonth()+ 1}-${yesterdaysDate.getDate()}`
// console.log(ydate);
 
const ydate = new Date();

let yday = date.getDate()- 1;
let ymonth = date.getMonth() + 1;
let yyear = date.getFullYear();
// to go to the 30th if today is 01-mm-yyyy
if (day < 01) ydate = 30;
//to reset to the 12th month if today is 01-01-yyyy
if (month < 01) ymonth = 12;
// This arrangement can be altered based on how we want the date's format to appear.
let yDate = `${yyear}-${ymonth}-${yday}`;
console.log(yDate); // YYYY-MM-DD

//------------------------------------------------------TO GET TODAYS VALUE TO DISPLAY ON EACH CURRENCY PAIR-------------------------------------------------------------------------//    


// Function to take in JSON response, and output each
// tickers price to the DOM element it corrosponds to
function outputResults(quotes) {
    // target each HTML element
    var USDAUDdown = document.querySelector(".USDAUDdown");
    var USDAUDup = document.querySelector(".USDAUDup");
    var USDEURdown = document.querySelector(".USDEURdown");
    var USDEURup = document.querySelector(".USDEURup");
    var USDEURdown = document.querySelector(".USDEURdown");
    var USDGBPup = document.querySelector(".USDGBPup");
    var USDGBPdown = document.querySelector(".USDGBPdown");
    var USDNZDup = document.querySelector(".USDNZDup");
    var USDNZDdown = document.querySelector(".USDNZDdown");
    var USDJEPup = document.querySelector(".USDJEPup");
    var USDJEPdown = document.querySelector(".USDJEPdown");
    var USDJPYup = document.querySelector(".USDJPYup");
    var USDJPYdown = document.querySelector(".USDJPYdown");
    var USDQARup = document.querySelector(".USDQARup");
    var USDQARdown = document.querySelector(".USDQARdown");
    var USDUAHup = document.querySelector(".USDUAHup");
    var USDUAHdown = document.querySelector(".USDUAHdown");
    var USDTOPup = document.querySelector(".USDTOPup");
    var USDTOPdown = document.querySelector(".USDTOPdown");
    var USDMROup = document.querySelector(".USDMROup");
    var USDMROdown = document.querySelector(".USDMROdown");
    var USDTMTup = document.querySelector(".USDTMTup");
    var USDTMTdown = document.querySelector(".USDTMTdown");
    var USDSARup = document.querySelector(".USDSARup");
    var USDSARdown = document.querySelector(".USDSARdown");
    var USDSYPup = document.querySelector(".USDSYPup");
    var USDSYPdown = document.querySelector(".USDSYPdown");
    var USDPABup = document.querySelector(".USDPABup");
    var USDPABdown = document.querySelector(".USDPABdown");
    var USDMZNup = document.querySelector(".USDMZNup");
    var USDMZNdown = document.querySelector(".USDMZNdown");
    // console.log(quotes[currentDate]["USDAUD"])
    // console.log(quotes[ydate]["USDAUD"])
    // for each div (ticker)
    USDAUDup.textContent = quotes[currentDate].USDAUD;
    USDAUDdown.textContent = quotes[currentDate].USDAUD;
    USDEURup.textContent = quotes[currentDate].USDEUR;
    USDEURdown.textContent = quotes[currentDate].USDEUR;
    USDGBPup.textContent = quotes[currentDate].USDGBP;
    USDGBPdown.textContent = quotes[currentDate].USDGBP;
    USDNZDup.textContent = quotes[currentDate].USDNZD;
    USDNZDdown.textContent = quotes[currentDate].USDNZD;
    USDJEPup.textContent = quotes[currentDate].USDJEP;
    USDJEPdown.textContent = quotes[currentDate].USDJEP;
    USDJPYup.textContent = quotes[currentDate].USDJPY;
    USDJPYdown.textContent = quotes[currentDate].USDJPY;
    USDQARup.textContent = quotes[currentDate].USDQAR;
    USDQARdown.textContent = quotes[currentDate].USDQAR;
    USDUAHup.textContent = quotes[currentDate].USDUAH;
    USDUAHdown.textContent = quotes[currentDate].USDUAH;
    USDTOPup.textContent = quotes[currentDate].USDTOP;
    USDTOPdown.textContent = quotes[currentDate].USDTOP;
    USDMROup.textContent = quotes[currentDate].USDMRO;
    USDMROdown.textContent = quotes[currentDate].USDMRO;
    USDTMTup.textContent = quotes[currentDate].USDTMT;
    USDTMTdown.textContent = quotes[currentDate].USDTMT;
    USDSARup.textContent = quotes[currentDate].USDSAR;
    USDSARdown.textContent = quotes[currentDate].USDSAR;
    USDSYPup.textContent = quotes[currentDate].USDSYP;
    USDSYPdown.textContent = quotes[currentDate].USDSYP;
    USDPABup.textContent = quotes[currentDate].USDPAB;
    USDPABdown.textContent = quotes[currentDate].USDPAB;
    USDMZNup.textContent = quotes[currentDate].USDMZN;
    USDMZNdown.textContent = quotes[currentDate].USDMZN;


}
//------------------------------------------------------------Get COMPARISON DATA FOR WIDGETS--------------------------------------------------------------------------------------//
// var myHeaders = new Headers();
// myHeaders.append("apikey", "nD1xSvmnPutHPAqFTdSUjB9s05FQ5Hao");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/currency_data/change?start_date=2022-09-20&end_date=2022-10-01&currencies=aud, gbp, eur, jpy, nzd, jep, qar, uah, top, mro, tmt, sar, syp, pab, mzn", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//------------------------------------------------------------TO GET LABLES TO DISPLAY ON X-AXIS (DATES)------------------------------------------------------------------//

/**
 * A function that finds the last 180 days of prices for a given currency pair
 * @param  ticker (string) -> the ticker of the asset (eg. USDAUD) 
 * @return historicalValues (array) -> The array of the last 12 (inculing today) prices
 */
function getHistoricalData(quotes, ticker) {
    var historicalValues = [];
    // get the previous 180 periods (prices for the last 180 days)
    var dates = getHistoricalLabels();

    // wrap in for loop
    for (var i = 0; i < dates.length; i++) {
        historicalValues.push(quotes[dates[i]][ticker]);
        // console.log(date);
    }
    // reverse the order of the values array to be oldest to newest
    historicalValues = historicalValues.reverse();
    // return allows the array to be used as a variable ( eg var history = graphHistorical() )
    return historicalValues;
}
// Funciton to get the pervious 180 dates
function getHistoricalLabels() {
    var historicalLabels = []
    for (var i=1; i<180; i++) {
    //  get current d ate
    var date = new Date();
    // get date at previous index (eg. today - 1 is yesterday)
    date.setDate(date.getDate() - i);
    // reformat the date to be YYYY-MM-DD
    date = date.toLocaleDateString().split("/").reverse().join("-");
    // push the currenecies value to  hte array
    historicalLabels.push(date);
    }
    historicalLabels = historicalLabels.reverse();
    return historicalLabels;
}


//-------------------------------------------------------------------FETCH API--------------------------------------------------------------------------//
var myHeaders = new Headers();
myHeaders.append("apikey", "cgH0TobNRldnmW2m3cl3MYmHd8nGtPHX");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch(`https://api.apilayer.com/currency_data/timeframe?start_date=2022-01-01&end_date=${currentDate}&currencies=aud, gbp, eur, jpy, nzd, jep, qar, uah, top, mro, tmt, sar, syp, pab, mzn`, requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result)
        console.log(JSON.parse(result).quotes[currentDate].USDAUD)
        var quotes = JSON.parse(result).quotes
        
        // use this in a graphing function 
        //renderHistoricalData(["2022-10-01"],getHistoricalData(quotes, "USDAUD"));
        outputResults(quotes);
        AddData(quotes, "USDAUD");
        //var priceselector=document.querySelector(".change")
        //priceselector.textContent = quotes[currentDate].USDAUD
    })
    .catch(error => console.log('error', error));

//separate a single currencypair
//----------------------------------------------------------DISPLAYS DATA & LABLES ONTO GRAPH-------------------------------------------------------------------------------------//
// graph data
//var minigraphContainer = document.querySelector("#minigraph-container");
function AddData(quotes, ticker, chart = minigraph) {

    chart.data.labels = getHistoricalLabels();
    chart.data.datasets.forEach((dataset) => {
        dataset.data = getHistoricalData(quotes, ticker);
    });
    chart.update()
    console.log(chart.data);
}

//widgets //
//fetch data & set endpoints as currenct day and previous day//
//separate a single currencypair
//compare todays value vs yesterdays value
//display todays value
// have the result effect css to display direction(arrow & widget colour) & % change

// currency converter //

const dropList = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "NPR" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})

function getExchangeRate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/f9f162c998335aec238945be/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{
        exchangeRateTxt.innerText = "Something went wrong";
    });
}
// News //
var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");
var newsContainer = document.getElementById("news-display")
var newsPlaceholder = document.getElementById("no-news")

var recentQuery = "";

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    query = searchInput.value;
    if (query && query != recentQuery) {
        recentQuery = query;
        //Insert news update function here
        console.log("Searched for " + query)
        fetchNews(query)
    }
    else {
        console.log("No input detected!");
    }
})

function fetchNews(query) {
    var queryURL = "https://api.worldnewsapi.com/search-news?text=currency&number=8&entities=LOC:" + query + "&api-key=aaaebe348fef4f01a1821d7fab811483";

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            generateNews(data);
        })
}

function generateNews(data){
    newsPlaceholder.style.display = "none";
    for (i = 0; i < 8; i++) {
        var newsArticle = document.createElement("div");
        var newsTitle = document.createElement("h2");
        var newsImage = document.createElement("img");
        var newsText = document.createElement("p")
        var newsURL = document.createElement("a")
        var newsDetails = document.createElement("div");

        newsArticle.className = "news-entry"

        newsTitle.textContent = data.news[i].title;
        newsImage.src=data.news[i].image;
        article = truncateContent(data.news[i].text);
        newsText.textContent = article;
        newsURL.href=data.news[i].url;
        newsURL.textContent = "Read More"

        newsArticle.appendChild(newsImage);
    
        newsDetails.appendChild(newsTitle);
        newsDetails.appendChild(newsText);
        newsDetails.appendChild(newsURL);
        newsArticle.appendChild(newsDetails);

        newsContainer.appendChild(newsArticle);
    }
}

function truncateContent(text){
    textArray = text.split(" ");
    while (textArray.length > 100){
        textArray.pop();
    }
    newText = textArray.join(" ");
    newText = newText + "...";
    return newText;
}