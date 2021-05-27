var artistVal = document.querySelector("#artist-name")
var songTitle = document.querySelector("#song-title")
var btnTranslate = document.querySelector("#btn-translate");
var result = document.querySelector("#output")


var url = "https://api.lyrics.ovh/v1"

function constructURL(input1 , input2) {
    return url + "/" + input1 + "/" + input2
}

function errorHandler(error){
    console.log("error occured", error)
    result.innerHTML = `<h1>404 Error!</h1>
    <h2>"sorry, Lyrics Not Found!"</h2>`
}

function getLyrics(){

result.innerHTML ='';   
    
var song_title = songTitle.value;
var artist_name = artistVal.value;
fetch(constructURL(artist_name,song_title))
  .then(response => response.json())
  .then(data => {
    var lyrics = data.lyrics;
    result.innerHTML = `<pre>${lyrics}</pre>`;
})
.catch(errorHandler);
}

btnTranslate.addEventListener("click" , getLyrics);


