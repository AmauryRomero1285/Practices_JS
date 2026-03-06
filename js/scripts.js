//Titulo
const title = document.getElementById("title");
const btnTitle = document.getElementById("changeTitle");
//List section
const listServices = document.getElementById("Services");
const btnList = document.getElementById("addServices");
const dltButton = document.getElementById("deleteService");
//Dark section
const btnDark = document.getElementById("darkMode");
// Text Input
const input = document.getElementById("in");
const output = document.getElementById("out");


btnTitle.addEventListener("click", () => {
    title.innerText = "Sitio Web Dinámico"

});

btnList.addEventListener("click", () => {
    const newElement = document.createElement("li");
    newElement.textContent = "New element";
    listServices.appendChild(newElement)
});

btnDark.addEventListener("click", (e) => {
    document.body.classList.toggle('dark-mode');

});

input.addEventListener("keyup", (e) => {
    output.textContent = "..." + " " + e.target.value
    let newService=document.createElement("li");
    newService.textContent=e.target.value;
    listServices.appendChild(newService);
});

dltButton.addEventListener("click", () => {
    if (listServices.lastElementChild) {
        listServices.removeChild(listServices.lastElementChild);
    }
});