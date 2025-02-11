let errorr = document.getElementsByClassName("forDisplayError")[0];


if (window.location.pathname.includes("new.html")) {
    let searchQuery = getSearchQuery();
    if (searchQuery) {
        callanotherapi(searchQuery);
    }
}


function getSearchQuery() {
    let params = new URLSearchParams(window.location.search);
    return params.get("search");
}

async function callanotherapi(inputValue) {
    try {
        let api = `http://www.omdbapi.com/?s=${inputValue}&apikey=f4c43948`;
        let fetchit = await fetch(api);
        let convertit = await fetchit.json();

        let searchMovie = document.getElementsByClassName("search-movie")[0];
        searchMovie.innerHTML = "";

        console.log(convertit);
        convertit.Search.forEach((element) => {
            searchMovie.innerHTML += `
             <div class="main-div" onclick = "movieFound(this)">
                 <div class="image-div"><img src="${element.Poster}" alt="Image Not Found" class="poster-image"></div>
                 <div class="movie-info">
                     <div class="MovieNAME">
                         <h1 class="textofmovie">${element.Title}</h1>
                     </div>
                     <div class="movieYEAR">
                         <h1 class="textofyear">Year - ${element.Year}</h1>
                     </div>
                 </div>
             </div>`;
        });

    } catch (error) {
        errorr.innerHTML = `<div class="Error-container">
                 <div><img src="ddd.png" alt="" class="itsErrorImage"></div>
                 <!-- <div><h1>Movie Not Found</h1></div> -->
             </div>`;
    }
}



let input  = document.getElementsByTagName("input")[0];
let searchButton = document.getElementsByClassName("search-button")[0];
searchButton.addEventListener("click", function(){
let inputValue = input.value.trim();
input.value = "";

    if(!inputValue){
        alert("Enter the input");
        return;
    }

    console.log(inputValue)
    window.location.href = "new.html?search=" + encodeURIComponent(inputValue);

})

function movieFound(that){
    let foundedMovie = that.innerText.split("\n")[0].trim();
window.location.href = "newanother.html?search=" + encodeURIComponent(foundedMovie);

}


