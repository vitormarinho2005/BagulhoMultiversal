// clique da barra de pesquisa para mostrar a entrada

let search = document.querySelector('.searchbar');
let searchicon = document.querySelector('.searchicon');
let searchinput = document.querySelector('#searchinput');
let removesearch = document.querySelector('#removesearch');

searchinput.style.display = 'none';
removesearch.style.display = 'none';

search.addEventListener('click', () => {
    if (searchinput.style.display === 'none') {
        searchinput.style.display = "block";
        removesearch.style.display = "block";
        searchicon = "none";
    } else {
        searchinput.style.display = 'none';
        removesearch.style.display = "none";
        searchicon.display = "block";
    }
})