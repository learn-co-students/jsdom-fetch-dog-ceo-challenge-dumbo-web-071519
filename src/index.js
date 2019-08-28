console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const imgDiv = document.querySelector("#dog-image-container");

const breedList = document.querySelector("#dog-breeds");

const selector = document.querySelector("select");

function getDogs(){
    return fetch(imgUrl)
    .then(response => response.json())
    .then(json => displayDogs(json))
}

function displayDogs(dogsObj){
    
    dogsObj.message.forEach(function(dogImgUrl){
        let img = document.createElement('img');
        img.src = dogImgUrl;
        imgDiv.appendChild(img);
    })

}
function getBreeds(){
    return fetch(breedUrl)
    .then(response => response.json())
    .then(json => displayBreeds(json))
}

function displayBreeds(breedsJson){
    const breedsObj = breedsJson.message
    for (breedKey in breedsObj){
       const li = document.createElement('li');
       li.textContent = breedKey;
       if (breedsObj[breedKey].length > 0){
           const ol = document.createElement('ol');
            breedsObj[breedKey].forEach(function(subBreed){
                const subLi = document.createElement('li');
                subLi.innerText = subBreed;
                ol.appendChild(subLi);
            });  
            li.appendChild(ol);
        }
       breedList.appendChild(li);
    }
}

function getData(){
    //getDogs();
    getBreeds();
}

function changeLiColor(e){
    if (e.target.tagName === "LI"){
        e.target.style.color = "blue";
        let children = [].slice.call(e.target.children)
        children.forEach(child => child.style.color = "initial");
    }
}
function handleBreeds(e){
    const breeds = document.querySelectorAll("li");
     if (e.target.value === "all"){
        breeds.forEach(function(breedLi){
            breedLi.style.display = "list-item";
        })
     } else{
         breeds.forEach(function (breedLi) {
             breedLi.style.display = "list-item";
         })
         sortBreeds(e.target.value);
     }
}
function sortBreeds(letter){
    const breeds = document.querySelectorAll("li");
    breeds.forEach(function(breedLi){
        if (breedLi.textContent[0] !== letter){
            breedLi.style.display = 'none';
        }
    })
}

document.addEventListener('DOMContentLoaded', getData);
breedList.addEventListener('click', changeLiColor);
selector.addEventListener('change', handleBreeds);