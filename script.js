const ctx = document.getElementById('minigraph').getContext('2d');
const minigraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
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
                beginAtZero: true
            }
        }
    }
});




















// graphs //
//fetch data & set endpoints //
//fetch data & set endpoints as currenct day and previous days//

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;

if (day < 10) day = "0" + day;
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate); // "17-6-2022"

// Function to take in JSON response, and output each
// tickers price to the DOM element it corrosponds to
function outputResults(quotes) {
    // target each HTML element
    var USDAUD = document.querySelector(".USDAUD");

    // for each div (ticker)
    USDAUD.textContent = quotes[currentDate].USDAUD;
}


/**
 * A function that finds the last 12 days of prices for a given currency pair
 * @param  ticker (string) -> the ticker of the asset (eg. USDAUD) 
 * @return historicalValues (array) -> The array of the last 12 (inculing today) prices
 */
function getHistoricalData(quotes, ticker) {
    var historicalValues = [];
    // get the previous 12 periods (prices for the last 12 days)
    var dates = getHistoricalLabels();

    // wrap in for loop
    for (var i = 0; i < 12; i++) {
        historicalValues.push(quotes[dates[i]][ticker]);
        console.log(date);
    }
    // reverse the order of the values array to be oldest to newest
    historicalValues = historicalValues.reverse();
    // return allows the array to be used as a variable ( eg var history = graphHistorical() )
    return historicalValues;
}

// Funciton to get the pervious 12 dates
function getHistoricalLabels() {
    var historicalLabels = []
    for (var i=0; i<12; i++) {
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



var myHeaders = new Headers();
myHeaders.append("apikey", "NlQNM0QWlcNQp6ACNWiiIUPrxiBNR3b2");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch(`https://api.apilayer.com/currency_data/timeframe?start_date=2022-01-01&end_date=${currentDate}`, requestOptions)
    .then(response => response.text())
    .then(result => {
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
// News //
var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");
var newsContainer = document.getElementById("news-display")

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

function generateNews(data) {
    for (i = 0; i < 8; i++) {
        var newsArticle = document.createElement("div");
        var newsTitle = document.createElement("h2");
        var newsImage = document.createElement("img");
        var newsText = document.createElement("p")
        var newsURL = document.createElement("a")

        newsArticle.className = "news-entry"

        newsTitle.textContent = data.news[i].title;
        newsImage.src = data.news[i].image;
        newsText.textContent = data.news[i].text;
        newsURL.href = data.news[i].url;

        newsArticle.appendChild(newsImage);
        newsArticle.appendChild(newsTitle);
        newsArticle.appendChild(newsText);
        newsArticle.appendChild(newsURL);

        newsContainer.appendChild(newsArticle);
    }
}