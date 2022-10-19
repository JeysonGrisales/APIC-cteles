const containerCards = document.getElementById('container-cards')
const searchElement = document.getElementById('search');
let URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'

window.addEventListener('DOMContentLoaded', api)

searchElement.addEventListener('keyup', search)

function api(){
    fetch(URL)
    .then(response => response.json())
    .then(response => response.drinks.forEach(element => {
        generateApi(element)
        console.log(element);
    }))
}

api()

function apiImg(){
    let newURL = s.url

    fetch(newURL)
    .then(response => response.json)
    .then(data => {
        response(data)
        console.log(data);
    })
}

function search(event){

    let urlserch = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}`

    urlserch = URL+"?name="+event.target.value

    api(urlserch)

    containerCards.innerHTML = "";

    
    
}




function generateApi(s){
    const {strDrink, strDrinkThumb} = s

    const card = document.createElement('div');
    card.classList.add('card')

    const namePerson = document.createElement('h1');
    card.classList.add('personName')
    namePerson.textContent = strDrink

    const imgCard = document.createElement('img')
    imgCard.classList.add('imgCard')
    imgCard.src = s.strDrinkThumb





    containerCards.appendChild(card)
    card.appendChild(namePerson)
    card.appendChild(imgCard )
}


