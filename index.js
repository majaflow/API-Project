const section = document.querySelector('#section')
const artist = document.querySelector('.search')


const searchForm = document.querySelector('form')
searchForm.addEventListener('submit', fetchResults);
function fetchResults(e) {
    e.preventDefault();
    let url=`https://www.songsterr.com/a/ra/songs/byartists.json?artists=${artist.value}`
console.log(url)
fetch(url)
.then(function(result) {
  console.log(result)
  return result.json();
})
.then(function(json) {
  console.log(json);
  displayResults(json);
})
}
function displayResults(json) {
    json.forEach(element => {
        console.log(element.title);
        display(element);
    });
        
    }

function display(data) {
    let article = document.createElement('article')
    let para = document.createElement('p')

    article.innerText = data.title

    article.appendChild(para)
    section.appendChild(article)
}
    


