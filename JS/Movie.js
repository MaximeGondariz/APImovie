function createNode(element) {
    // fonction qui perment de créer un élément
    return document.createElement(element);
}

function append(parent, el) {
    // fonction qui permet de créer un noeud
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');

function getmovie(){

    //récupération du titre et de la date dans le lien

    let parts = window.location.search.substr(1).split("&");    
    var GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }

    const url = 'https://www.omdbapi.com/?apikey=f6e256e1&t='+GET.t+"&y="+GET.y;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            
            // Création des éléments

            let Movie = data;

            let black = createNode('div');
            black.classList.add('black')

            let li = createNode('li');
            li.id = "ligne";

            let div = createNode('div');
            div.id = "detail";

            let info = createNode('div');
            info.id = "info";

            let span = createNode('span');
            span.id = "principal";

            let Title = createNode('h1');

            let Critics = createNode('p');
            Critics.style = "font-size : 28"

            let RandR = createNode('p');
            RandR.style = "font-size : 24"

            let basic = createNode('p');
            basic.style = "font-size : 18"

            let actor = createNode('p');
            actor.style = "font-size : 18"

            let plot = createNode('p');
            plot.style = "font-size : 16"

            let img = createNode('img');
            img.id = "poster";

            // Attribution des données

            img.src = Movie.Poster;

            let str = "";
            Title.innerHTML = `${Movie.Title}`;
            str = "Ratings : \n"
            Critics.innerHTML = str.bold().split('\n').join('<br/>');0
            for(i=0;i<Movie.Ratings.length;i++){
                Critics.innerHTML += `${Movie.Ratings[i].Source} : ${Movie.Ratings[i].Value} \n`.split('\n').join('<br/>');
            }
            str = "Runtime : ";
            RandR.innerHTML = str.bold()+`${Movie.Runtime} - Rated ${Movie.Rated}`;

            str = "Released : ";
            basic.innerHTML += str.bold()+`${Movie.Released},\n`.split('\n').join('<br/>');
            str = "Genre : ";
            basic.innerHTML += str.bold()+`${Movie.Genre},\n`.split('\n').join('<br/>');
            str = "Language : ";
            basic.innerHTML += str.bold()+`${Movie.Language},\n`.split('\n').join('<br/>');
            str = "Country : ";
            basic.innerHTML += str.bold()+`${Movie.Country},\n`.split('\n').join('<br/>');
            str = "Director : ";
            basic.innerHTML += str.bold()+`${Movie.Director},\n`.split('\n').join('<br/>');
            str = "Writer : ";
            basic.innerHTML += str.bold()+`${Movie.Writer},\n`.split('\n').join('<br/>');
            str = "Type : ";
            basic.innerHTML += str.bold()+`${Movie.Type},\n`.split('\n').join('<br/>');
            str = "DVD release : ";
            basic.innerHTML += str.bold()+`${Movie.DVD},\n`.split('\n').join('<br/>');
            str = "BoxOffice : ";
            basic.innerHTML += str.bold()+`${Movie.BoxOffice},\n`.split('\n').join('<br/>');
            str = "Awards : ";
            basic.innerHTML += str.bold()+`${Movie.Awards},\n`.split('\n').join('<br/>');

            str = "With : ";
            actor.innerHTML = str.bold()+`${Movie.Actors}`;
            str = "Plot : ";
            plot.innerHTML = str.bold()+`${Movie.Plot}`;

            // Mise en place des éléments

            append(span, Title);
            append(span, RandR);
            append(info, Critics);
            append(info, basic);
            append(info, actor);
            append(info, plot);
            append(div, img);
            append(div, info);
            append(li, span);
            append(black, li);
            append(black, div);
            append(ul, black);
        })
    .catch(function(error) {
        console.log(error);
    });
}