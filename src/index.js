console.log('%c HI', 'color: firebrick')

// -------------------Constants or variables whiich ever you choose
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const divImages = document.querySelector("#dog-image-container")
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulTag = document.querySelector('#dog-breeds')


// ----------------------Fetches
fetch(imgUrl)
.then(res => res.json())
// .then(data => console.log(data))
//say what you want to do with that data(slapImageToTheDom)
.then(dogCeo => slapImageToTheDom(dogCeo))

// -----------------------------SLAPTODOM
//now define what you'er slapping to the dom

function slapImageToTheDom(dogCeo){
    // console.log(dogCeo.message[0])
    dogCeo.message.forEach(poop => {
        imgTag = document.createElement('IMG');
        imgTag.src = poop;
        divImages.append(imgTag);
    })
}


// fetch(breedUrl)
// .then(resp => resp.json())
// .then(resp => { let renderBreedArr = Object.keys(resp.message)

//     renderBreedArr.forEach((breed) => {
//         ulTag.innerHTML += 
//         `
//         <li>${breed}</li>
//         `
//     })
// })

fetch(breedUrl)
.then(resp => resp.json())
.then(data => renderBreedArr(data))


//challenge 2
function renderBreedArr(data){
    console.log(data)
    //turn object into an array
    let arr = Object.keys(data.message)
    console.log(arr)
    //iterate over the arr
    

    //challenge 4
    const dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener("change", (event) => {
        // console.log(event.target.value)
        fetch(breedUrl)
        .then(resp => resp.json())
    })

    //challenge 2 stuff
    arr.forEach(breed => {
        // if dropDown is clicked filter the Breed list and render out that filtered list else render breed
        let liTag = document.createElement('li');
        liTag.innerHTML += `${breed}`
        ulTag.append(liTag);
        liTag.addEventListener('click', someCallBackFunction)
    })

    //challenge 3
    function someCallBackFunction(event){
        console.log(event.target.style.color = 'red')
    }

}
    //returns the promise after the .then
    function makeFetch(){ 
    return fetch(breedUrl)
    .then(resp => resp.json())
    }

// ------------------------ADDEVENTLISTENERS



 









 





