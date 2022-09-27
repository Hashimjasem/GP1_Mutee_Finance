// graphs //
// currency converter //
// News //
var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");

var recentQuery = "";

searchButton.addEventListener("click", function(){
    query = searchInput.value;
    if (query&&query!=recentQuery){
        recentQuery = query;
        //Insert news update function here
        console.log("Searched for "+query)
    }
    else{
        console.log("No input detected!");
    }
})