console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const imagePlace = document.getElementById("dog-image-container")

let breedList=0


function dogShowFunc(dogListObj) {
    dogList = dogListObj.message
    dogList.forEach(function(dog) {
        const image = document.createElement("IMG");
        image.src = dog;
        imagePlace.prepend(image);
    })
}

fetch(imgUrl).then(response=>response.json())
.then(dogShowFunc)

document.addEventListener("DOMContentLoaded",()=>{
    
    fetchDogs(appendDogBreeds)
   })


function fetchDogs(appendFunc){
    fetch(breedUrl).then(response => response.json())
        .then(appendFunc)
}
function appendDogBreeds(breedListObj) {
    const ul = document.querySelector("ul")
     breedList = breedListObj.message

    Object.keys(breedList).forEach(function (breed) {

        const li = document.createElement('li')

        if (breedList[breed].length !== 0) {

            li.innerText = `${breed} ${breedList[breed][0]}`
            ul.append(li)
        }
       

    })
}
function liClick(event) {
    if (event.target.nodeName==='LI'){
        event.target.style.color = 'blue'
      }
    }
document.addEventListener('click', liClick)

const selectDog = document.getElementById('breed-dropdown')

selectDog.addEventListener('change', function(){
  
    appendSelectedDod(selectDog)
})

function appendSelectedDod(selectedDogs){
    const ul = document.querySelector("ul")
   ul.innerHTML = '';

   Object.keys(breedList).forEach(function (breed) {

        const li = document.createElement('li')
        
     
       if (breedList[breed].length !== 0 && breed[0] === selectedDogs.value) {

            li.innerText = `${breed} ${breedList[breed][0]}`
            ul.append(li)
        }

    })
}