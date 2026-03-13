//Change title
const title = document.getElementById("title");
const btnTitle = document.getElementById("changeTitle");

//List section
const listServices = document.getElementById("Services");
const items = listServices.getElementsByTagName("li");
//type
const countServices = document.getElementById("countServices");
//buttons
const btnList = document.getElementById("addServices");
const btnListType = document.getElementById("addServiceType");
const dltButton = document.getElementById("deleteService");

//Dark section
const btnDark = document.getElementById("darkMode");

// Text Input
const input = document.getElementById("in");
const output = document.getElementById("out");

// load services from localStorage
const savedServices = localStorage.getItem("services");
if (savedServices) {
  const services = JSON.parse(savedServices);
  services.forEach((service) => {
    const newElement = document.createElement("li");
    newElement.textContent = service;
    listServices.appendChild(newElement);
  });
}

//change title
btnTitle.addEventListener("click", () => {
  title.innerText = "Sitio Web Dinámico";
});

// Function to save services in localStorage
const saveToLocal = () => {
  const services = Array.from(listServices.querySelectorAll("li:not(.default)")).map(
    (li) => li.textContent,
  );
  localStorage.setItem("services", JSON.stringify(services));
};

// Button to add service (automatic)
btnList.addEventListener("click", () => {
  const newElement = document.createElement("li");
  newElement.textContent = "Servicio " + (listServices.children.length + 1);
  listServices.appendChild(newElement);

  saveToLocal();
});

// Button to add service (manual)
btnListType.addEventListener("click", () => {
  let result = prompt("Add service", "");
  if (result) {
    const newElement = document.createElement("li");
    newElement.textContent = result;
    listServices.appendChild(newElement);

    saveToLocal();
  } else {
    alert("Need to add a service name");
  }
});

//count services
//function that inject the info
const updater = () => {
  const counter = listServices.children.length;
  countServices.textContent = counter;
};
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
    saveToLocal();
  }
});

//delete with double click
listServices.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "LI") {
    listServices.removeChild(e.target);
    saveToLocal();
  }
});

//dark mode
btnDark.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
});

//type
input.addEventListener("keyup", (e) => {
  output.textContent = "..." + " " + e.target.value;
});
//persistencia el localstorage JSON. stringlfy .parse
