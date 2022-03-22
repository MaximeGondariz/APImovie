function createNode(element) {
    // fonction qui permet de créer un élément
    return document.createElement(element);
}

function append(parent, el) {
    // fonction qui permet de créer un noeud
    return parent.appendChild(el);
}
const test = document.getElementById('test');
const Movies = document.getElementById('movies');

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
        console.log(error);
    });
}

function construction(Movie){

    // Création des éléments

    let Container = createNode('div');
    Container.classList.add("container");

    let info = createNode('div');
    info.classList.add("info");

    let Title = createNode('a');
            
    let img = createNode('img');
    img.id = "poster";
    img.src = Movie.Poster;

    // Attribution des données

    Title.innerHTML = `${Movie.Title} - ${Movie.Year}`;
    Title.classList.add("links")
    Title.setAttribute('href', "Single.html?t="+Movie.Title+"&y="+Movie.Year);

    // Mise en place des éléments

    append(info, Title);
    append(Container, info);
    append(Container, img);
    append(Movies, Container);
}