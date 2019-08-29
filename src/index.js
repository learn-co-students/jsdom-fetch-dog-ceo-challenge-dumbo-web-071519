console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function changeColor(e){
    e.target.style.color = "red"
    e.target.style.fontWeight = "bold"
    //console.log("hi")
}

function createDogIMG(dog){
    const imageContainer = document.getElementById("dog-image-container")
    const image = document.createElement("IMG")
    image.src = dog
    imageContainer.prepend(image)
}

function breedLI(breedText){
    const breedContainer = document.getElementById("dog-breeds")
    const breedLI = document.createElement("LI")
    breedLI.innerText = breedText
    breedLI.addEventListener("click",changeColor )
    breedContainer.append(breedLI)
}

function createBreedLI(breed){
    // console.log(breed,breeds[breed])
    const breedTypes = breeds[breed]
    //if breeds[breed] is empty
    if (breedTypes.length === 0){
        //just add an LI for that breed
        breedLI(breed)
    } else{
    //otherwise
        // breedLI(breedTypes.forEach(function(type){
        //     return`${type} ${breed}`
        // }))

        breedTypes.forEach(function(type){
            breedLI(`${type} ${breed}`)
        })

        //iterate through breeds[breed]
            //add an LI for that "${breeds[breed][i]} ${breed} "
    }
}

function slapDogOnDOM(dogOBJ){
    // console.log(dogList.message[0])
    dogs = dogOBJ.message
    dogs.forEach(createDogIMG)
        // function(dog) {
        // const image = document.createElement("IMG");
        // image.src=dog
        // imageContainer.prepend(image)
        // }   
}

function slapBreedsOnDOM(breedsOBJ) {    
    breeds = breedsOBJ.message
    // console.log(breeds)
    // console.log(Object.keys(breeds))
    Object.keys(breeds).forEach(createBreedLI)

}

// function hideLI(li){
//     li.style.display = "none"
// }

function filter(event){
     const value = event.target.value
     //console.log(value)
     const allBreeds = document.querySelectorAll("LI")
     allBreeds.forEach(function(breedLI){
        //  console.log(breedLI)
        //  let breedName = breedLI.innerText
        if(breedLI.innerText[0] !== value){
            // breedName.target.style.display = "none"
            breedLI.style.display = "none"
        }else{
            breedLI.style.display = "list-item"
        }

     })
}

fetch(imgUrl)
    .then(response => response.json())
    .then(slapDogOnDOM)
//data=>console.log(data))

fetch(breedUrl)
    .then(response => response.json())
    .then(slapBreedsOnDOM)

document.querySelector("#breed-dropdown").addEventListener("change", filter)