function createNode(element) {
    // fonction qui permet de créer un élément
    return document.createElement(element);
}

function append(parent, el) {
    // fonction qui permet de créer un noeud
    return parent.appendChild(el);
}
const test = document.getElementById('test');
const Movies = document.getElementById('container_movies');

function getmovies(){
    // code inutilisé
    // var exist = document.getElementsById("ligne");
    // if(typeof(exist) != 'undefined' && exist != null){
    //     ul.removeChild(exist);
    // }

    var input = document.getElementById("item").value;
    const url = 'https://www.omdbapi.com/?apikey=f6e256e1&s='+input;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            data.Search.forEach(element => construction(element));
        })
    .catch(function(error) {
        nbmovies.innerHTML = "Aucun film ne correspond à votre recherche"
    });
}

let nbmovies = document.getElementById("nbmovies");
let i = 0;

function construction(Movie){

    // Création des éléments
    i++;

    let Container = createNode('div');
    Container.classList.add("container");

    let info = createNode('div');
    info.classList.add("info");

    let Lien = createNode('a');
            
    let img = createNode('img');
    img.id = "poster";
    img.src = Movie.Poster;

    // Attribution des données

    Lien.classList.add("links")
    Lien.setAttribute('href', "Single.html?t="+Movie.Title+"&y="+Movie.Year);

    nbmovies.innerHTML = "Movies found : "+i+"\n (click on a movie poster to show informations about it)".split('\n').join('<br/>');

    // Mise en place des éléments

    append(Lien, img);
    append(info, Lien);
    append(Container, info);
    append(Movies, Container);
}