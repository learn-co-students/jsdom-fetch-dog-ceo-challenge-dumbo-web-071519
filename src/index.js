console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



function addDogImages(image){
    let container = document.querySelector("#dog-image-container")
    let img = document.createElement("img") 
    img.src = image
    container.appendChild(img)
}

function loadDogs(event) {
    // console.log("this works!")
    fetch(imgUrl)
    .then(response => response.json())
    .then(function(json){
    
        console.log(json)
        console.log(event)
        
       json["message"].forEach(image => {
        addDogImages(image)
        // console.log(img)
       });
    })
}


function addDogBreeds(key){
    let container = document.querySelector("#dog-breeds")
    let li = document.createElement("li") 
    li.innerText = key
    container.appendChild(li)
}


function loadBreeds(event) {
    // console.log("this works!")
    fetch(breedUrl)
    .then(response => response.json())
    .then(function(json){
    
    console.log(json)
    const breeds = json["message"]
       
       for (const key in breeds) {
           addDogBreeds(key)
       }
    })
}



window.addEventListener("DOMContentLoaded", loadDogs)
window.addEventListener("DOMContentLoaded", loadBreeds)