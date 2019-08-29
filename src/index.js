console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const config = {}

document.addEventListener('DOMContentLoaded', function(){

  const request = fetch(imgUrl, config)
  .then(response => response.json()) //JSON.stringify?
    .then(addDogPics)

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl, config)
    .then(response => response.json())
      .then(addDogBreeds)

  document.querySelector("#dog-breeds").addEventListener("click", changeColor)
})

function addDogPics(data) {
  dogDiv = document.querySelector("#dog-image-container")
  data["message"].forEach(function(dogSRC) {
    const img = document.createElement("img"); img.src = dogSRC
    dogDiv.appendChild(img)
  })
}

function addDogBreeds(data) {
  const message = data["message"]
  dogUL = document.querySelector("#dog-breeds")
  console.log(message)
  for (const outerBreed in message) {
    const li = document.createElement("li")
    li.innerHTML = outerBreed
    dogUL.appendChild(li)
  }
}

function changeColor(){
  const target = event.target
  if (target.nodeName === "LI") {
    if (target.style.color === "green") {
      target.style.color = "black"
    } else {
      target.style.color = "green"
    }
  }
}
