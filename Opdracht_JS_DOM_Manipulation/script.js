const lionButton = document.getElementById("lion-button");
const leopardButton = document.getElementById("leopard-button");
const elephantButton = document.getElementById("elephant-button");
const rhinoButton = document.getElementById("rhino-button");
const buffaloButton = document.getElementById("buffalo-button");


const spottedAnimal = document.getElementById("spotted-animals-list");
const bigFiveList = document.getElementById("big-five-list");


lionButton.addEventListener('click', function () {
    const elementSpottedLion = document.createElement("li");
    const bigFiveListLion = document.getElementById("lion");

    elementSpottedLion.classList.add("spotted-animals-list-item");
    spottedAnimal.appendChild(elementSpottedLion);
    elementSpottedLion.innerHTML = "Lion";

    bigFiveList.removeChild(bigFiveListLion);
});

leopardButton.addEventListener('click', function () {
    const elementSpottedLeopard = document.createElement("li");
    const bigFiveListLeopard = document.getElementById("leopard");

    elementSpottedLeopard.classList.add("spotted-animals-list-item");
    spottedAnimal.appendChild(elementSpottedLeopard);
    elementSpottedLeopard.innerHTML = "Leopard";

    bigFiveList.removeChild(bigFiveListLeopard);

});

elephantButton.addEventListener('click', function () {
    const elementSpottedElephant = document.createElement("li");
    const bigFiveListElephant = document.getElementById("elephant");

    elementSpottedElephant.classList.add("spotted-animals-list-item");
    spottedAnimal.appendChild(elementSpottedElephant);
    elementSpottedElephant.innerHTML = "Elephant";

    bigFiveList.removeChild(bigFiveListElephant);

});

rhinoButton.addEventListener('click', function () {
    const elementSpottedRhino = document.createElement("li");
    const bigFiveListRhino = document.getElementById("rhino");

    elementSpottedRhino.classList.add("spotted-animals-list-item");
    spottedAnimal.appendChild(elementSpottedRhino);
    elementSpottedRhino.innerHTML = "Rhino";

    bigFiveList.removeChild(bigFiveListRhino);

});

buffaloButton.addEventListener('click', function () {
    const elementSpottedBuffalo = document.createElement("li");
    const bigFiveListBuffalo = document.getElementById("buffalo");

    elementSpottedBuffalo.classList.add("spotted-animals-list-item");
    spottedAnimal.appendChild(elementSpottedBuffalo);
    elementSpottedBuffalo.innerHTML = "Buffalo";

    bigFiveList.removeChild(bigFiveListBuffalo);

});

// Part 2 - Remove 1 element from the DOM

const removeFirstItemButton = document.getElementById("remove-first-item-button");

removeFirstItemButton.addEventListener('click', function () {
    const animalsSpottedList = document.getElementById("spotted-animals-list");
    const removeFirst = document.getElementsByClassName("spotted-animals-list-item")[0];

    animalsSpottedList.removeChild(removeFirst);
});

// Part 3 - Removing Multiple Elements from the DOM

const removeAllButton = document.getElementById("remove-all-button");

removeAllButton.addEventListener('click', function () {
    const node = document.getElementById("spotted-animals-list");
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
});

