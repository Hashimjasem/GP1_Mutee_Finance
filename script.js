// graphs //
// currency converter //
// News //
var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");

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
    for(i=0; i<8;i++){
        var newsArticle = document.createElement("div");
        
    }
}