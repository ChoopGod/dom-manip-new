const myGallery = document.getElementById("app");
const mySelect = document.getElementById("animals");

mySelect.addEventListener("change",animalSelected);

function animalSelected(){
    console.log(mySelect.value);
    switch (mySelect.value){
        case "tiger":
            buildAnimalCard("tiger",);
            break;

        case "koala":
            buildAnimalCard("koala",);
            break;

        case "ferret":
            buildAnimalCard("ferret",);
            break;

        case "cat":
            buildAnimalCard("cat",);
            break;

            default:
                alert("no such animal",)
    }
}

function buildAnimalCard(testvalue){
    console.log("her er et fint dyr");
    console.log(testvalue);
}
function buildAnimalCard(myHeadline, myUrl, myDescription) {

    myGallery.innerHTML ="";

    const myCard = document.createElement("figure");
    const cardHeadline = document.createElement("h2");
    const cardImage = document.createElement("img");
    const cardDescription = document.createElement("p");

    //asign elements corresponding values
    cardHeadline.innerText = myHeadline;
    cardImage.src =myUrl;
    cardDescription.innerText = myDescription;

    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);

    myGallery.appendChild(myCard);
}