//import {currentSlide} from './caroussel;'

function createNode(element) {
    // fonction qui permet de créer un élément
    return document.createElement(element);
}

function append(parent, el) {
    // fonction qui permet de créer un noeud
    return parent.appendChild(el);
}

let test = document.getElementById("test");
const Movies = document.getElementById('container_movies');
const dots = document.getElementById('container_dots');

function getmovies(){
    //test.textContent = "oui"
    var input = document.getElementById("item").value;
    const url = 'https://www.omdbapi.com/?apikey=f6e256e1&s='+input;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            //test.textContent = JSON.stringify(data);
            data.Search.forEach(element => construction(element));
        })
    .catch(function(error) {
        nbmovies.innerHTML = "No movie matches your search"
    });
}

let nbmovies = document.getElementById("nbmovies");
let i = 0;

function construction(Movie){

    // Création des éléments
    let block = document.createElement("div");
    block.classList.add("container", "fade");

    let dot = createNode('span');
    dot.classList.add('dot');
    dot.setAttribute("onclick","currentSlide["+i+"];");

    let info = createNode('div');
    info.classList.add("info");

    let Titre = createNode('h1')

    let Lien = createNode('a');

    let img = createNode('img');
    img.id = "poster";
    img.src = Movie.Poster;

    // Attribution des données

    Titre.innerHTML = Movie.Title+" - "+Movie.Year;

    Lien.classList.add("links")
    Lien.setAttribute('href', "Single.html?t="+Movie.Title+"&y="+Movie.Year);

    i++;
    nbmovies.innerHTML = "Movies found : "+i+"\n (click on a movie poster to show informations about it)".split('\n').join('<br/>');

    // Mise en place des éléments

    append(Lien, img);
    append(info, Titre);
    append(info, Lien);
    append(block, info);
    append(Movies, block);
    append(dots, dot)
}