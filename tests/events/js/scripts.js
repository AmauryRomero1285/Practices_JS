//Titulo
const title = document.getElementById("title");
const btnTitle = document.getElementById("changeTitle");

//List section
const listServices = document.getElementById("Services");
const items = listServices.getElementsByTagName("li"); 
//type
const countServices = document.getElementById("countServices");
//buttons
const btnList = document.getElementById("addServices");
const dltButton = document.getElementById("deleteService");

//Dark section
const btnDark = document.getElementById("darkMode");

// Text Input
const input = document.getElementById("in");
const output = document.getElementById("out");

//change title
btnTitle.addEventListener("click", () => {
    title.innerText = "Sitio Web Dinámico"

});

//Add element  - button
btnList.addEventListener("click", () => {
    let result = prompt("Add service", "");
    if (result !== null && result !== "") {
        const newElement = document.createElement("li");
        newElement.textContent = result;
        listServices.appendChild(newElement)
    } else {
        alert("Debes añadir un servicio")
    }



});
//count services
//function that inject the info
const updater = () => {
    const counter = listServices.children.length;
    countServices.textContent = counter;
}
//observer that depends to the first function to listen changes in DOM
const observer = new MutationObserver(() => {
    updater();
});
//config to observe child of ul
observer.observe(listServices, { childList: true });
//call if element exist
updater();


//delete element
dltButton.addEventListener("click", () => {
    if (listServices.lastElementChild) {
        listServices.removeChild(listServices.lastElementChild);
    }
});

btnDark.addEventListener("click", (e) => {
    document.body.classList.toggle('dark-mode');

});

//type 
input.addEventListener("keyup", (e) => {
    output.textContent = "..." + " " + e.target.value
});
//eliminar con doble click y persistencia el localstorage JSON. stringlfy .parse
