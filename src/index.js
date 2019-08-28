const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('dog-image-container')
    const dogBreeds = document.getElementById('dog-breeds')
    const breedSelection = document.getElementById('breed-dropdown')

    fetch(imgUrl)
        .then( res => res.json())
        .then( json => addImages(json["message"]))

    fetch(breedUrl)
        .then( res => res.json())
        .then( json => addBreed(json["message"]))

    function addImages(arr) {
        arr.forEach(function (img) {
            const image = `<img src = ${img}></img>`
            imageContainer.innerHTML += image
        })
    }

    function addBreed(obj) {
        for (const key in obj) {
            const li = document.createElement('li')
            li.innerText = key
            li.style.fontSize = '20px'
            li.style.lineHeight = '1.5'
            li.addEventListener('click', e => e.target.style.color = '#FF5154')
            dogBreeds.append(li)
        }
    }

    breedSelection.onchange = function selectedBreed(e) {

        const newBreeds = Object.assign({}, dogBreeds.children)
        for (const key in newBreeds) {
            if (e.target.value == "all") {
                newBreeds[key].style.display = "list-item"
            }
            else if (newBreeds[key].innerText[0] == e.target.value) {
                newBreeds[key].style.display = "list-item"
            }
            else {
                newBreeds[key].style.display = "none"
            }
        }
    }
    // breedSelection.onchange = function selectedBreed(e) {
    //     const newBreeds = Object.assign({}, dogBreeds.children)
    //     const filteredBreeds = Object.assign({}, newBreeds)
    //     for (const key in newBreeds){
    //         if(newBreeds[key].innerText[0] == e.target.value){
    //             console.log("YUP")
    //         }
    //         else{
    //             delete filteredBreeds[key]
    //         }
    //     }
    //     console.log(filteredBreeds)
    //     dogBreeds
    // }
})