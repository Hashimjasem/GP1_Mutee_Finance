// graphs //
// currency converter //
// News //
var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");
var newsContainer = document.getElementById("news-display")
var newsPlaceholder = document.getElementById("no-news")

var recentQuery = "";

searchButton.addEventListener("click", function(event){
    event.preventDefault();
    query = searchInput.value;
    if (query&&query!=recentQuery){
        recentQuery = query;
        //Insert news update function here
        console.log("Searched for "+query)
       fetchNews(query)
    }
    else{
        console.log("No input detected!");
    }
})

function fetchNews(query){
    var queryURL = "https://api.worldnewsapi.com/search-news?text=currency&number=8&entities=LOC:"+query+"&api-key=aaaebe348fef4f01a1821d7fab811483";
    
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
    for(i=0; i<8;i++){
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