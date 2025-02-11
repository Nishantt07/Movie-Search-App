if (window.location.pathname.includes("newanother.html")) {
    let searchQuery = getSearchQuery();
    if (searchQuery) {
        searchbyapi(searchQuery);
    }
}


function getSearchQuery() {
    let params = new URLSearchParams(window.location.search);
    return params.get("search");
}




async function searchbyapi(foundedMovie){
    let api = `http://www.omdbapi.com/?t=${foundedMovie}&apikey=f4c43948`;
    let fetchit = await fetch(api);
    let convert = await fetchit.json();
let lastSection = document.getElementsByClassName("section-searched-movie")[0];
lastSection.innerHTML = `

<div class="searched-movie">

<div class="searched-movie-image"><img src="${convert.Poster}" alt="Image Not Found"></div>
<div class="Searched-movie-details">
    <div class="movieYEARR">
        <h1>Year : ${convert.Year}</h1>
    </div>
    <div class="movieNAME">
        <h1>Name :  ${convert.Title}</h1>
    </div>
    <div class="movieRating">
        <h1>Rating :  ${convert.Rated}</h1>
    </div>
    <div class="movieReleased">
        <h1>Released :  ${convert.Released}</h1>
    </div>
    <div class="movieGENRE">
        <h1>Genre :  ${convert.Genre}</h1>
    </div>
    <div class="movieWriter">
        <h1>Writer :  ${convert.Writer}</h1>
    </div>
    <div class="movieACTORS">
        <h1>Actors :  ${convert.Actors}</h1>
    </div>
    <div class="movieDECRI">
        <h1 >Description :  ${convert.Plot}</h1>
    </div>
    <div class="movieLANG">
        <h1>Language :  ${convert.Language}</h1>
    </div>
    <div class="movieACHIEVE">
        <h1>Achievements : ${convert.Awards}</h1>
    </div>
</div>


</div>


`

}