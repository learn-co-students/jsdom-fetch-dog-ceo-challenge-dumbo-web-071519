console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

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

       json["message"].forEach(image => {
        addDogImages(image)
        // console.log(img)
       });
    })
}


function addDogBreeds(key){
    let container = document.querySelector("#dog-breeds")
    let li = document.createElement("li")
    li.dataset.dog = true
    li.innerText = key
    container.appendChild(li)
}


function loadBreeds(event) {
    // console.log("this works!")
    return fetch(breedUrl)
    .then(response => response.json())
    .then(function(json){

    console.log(json)
    const breeds = json["message"]

       for (const key in breeds) {
           addDogBreeds(key)
       }
    })
}

loadDogs()
loadBreeds()

const ul = document.querySelector("#dog-breeds");
ul.addEventListener('click', function(event){
  if (event.target.tagName === "LI") {
    event.target.style.color = "red"
  }
})

const dropDown = document.querySelector("#breed-dropdown")

dropDown.addEventListener('change', function(){
  loadBreeds().then(whatIsThis => {
    alphabetize(event)
  })
  // alphabetize(event)
})

function alphabetize(event){
  const dogs = document.querySelectorAll("[data-dog='true']")
  ul.innerHTML=""
  dogs.forEach(function(element){
    if (dropDown.value==="all") {
      loadBreeds()
    }
    if (element.innerText[0]===dropDown.value){
      ul.append(element)
    }
  })
}
