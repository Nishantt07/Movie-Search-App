
let selectedCountry = "US";
let selectedpopularityvalue = "popularity";
let selectedType = "movie";
let selectedTypevValue = 10749;
let selectedYearValu = 2024;
let page = 1;
let convert;
let moviesection = document.getElementsByClassName("movies-section")[0];

// let totalSection = document.getElementsByClassName("total-section")[0];
// let forDisplayError = document.getElementsByClassName("forDisplayError")[0];



let sectionsearchedmovie = document.getElementsByClassName("section-searched-movie")[0];

document.getElementById("selectmovietype").addEventListener("change", function(){
    selectedTypevValue = Number.parseInt(this.value); 
    fetchapi();
});

document.getElementById("years").addEventListener("change", function(){
    selectedYearValu = Number.parseInt(this.value);
    fetchapi();
});

document.getElementById("popularityy").addEventListener("change", function(){
    selectedpopularityvalue = this.value;
    fetchapi();
});

document.getElementById("types").addEventListener("change", function(){
    selectedType = this.value;
    fetchapi();
});

document.getElementById("country").addEventListener("change", function(){
    selectedCountry = this.value;
    fetchapi();
});

async function fetchapi(){
    let api = `https://api.themoviedb.org/3/discover/${selectedType}?api_key=765daabc68e5585643a88183ffc1d87a&with_genres=${selectedTypevValue}&primary_release_year=${selectedYearValu}&sort_by=${selectedpopularityvalue}.desc&with_origin_country=${selectedCountry}&page=${page}`;
    
    try {
        let fetchit = await fetch(api);
         convert = await fetchit.json();
        console.log(convert);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    updateMovies(convert);
}

function updateMovies(convert){
moviesection.innerHTML = "";
convert.results.forEach((element)=>{
    moviesection.innerHTML += `<div class="movies-details">
            <div class="image"><img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="Image Not Found" class="real-image" ></div>
            <div class="Movie-Name"><h1 class= "movie-margin"> ${element.original_title || "NA"}</h1></div>
            <div class="release-date"><h1>Release Date : ${element.release_date || "NA"}</h1></div>
            <div class= "itsRating">Rating : ${element.vote_average || "NA"}</div>
            <div class="Description"><h1>Description :  ${element.overview || "NA"}</h1></div>
        </div>
`

})

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

fetchapi();

