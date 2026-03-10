const btnChargeUsers = document.getElementById("btnChargeUsers");
const userContainer = document.getElementById("userContainer");

btnChargeUsers.addEventListener("click", () => {
    // Spinner de carga con estilo Tailwind
    userContainer.innerHTML = `
        <div class="col-span-full flex justify-center py-10">
            <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-cyan"></div>
        </div>`;

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((users) => {
            userContainer.innerHTML = "";
            users.forEach((user) => {
                const userElement = document.createElement("div");
                

                userElement.className = "bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-cyan/50 transition-all duration-300 group shadow-lg";
                
                userElement.innerHTML = `
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan font-bold mr-3 border border-brand-cyan/20">
                            ${user.name.charAt(0)}
                        </div>
                        <h3 class="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                            ${user.name}
                        </h3>
                    </div>
                    <div class="space-y-2 text-sm">
                        <p class="flex items-center text-brand-gray">
                            <span class="material-symbols-outlined text-[18px] mr-2">mail</span>
                            ${user.email.toLowerCase()}
                        </p>
                        <p class="flex items-center text-brand-gray/80">
                            <span class="material-symbols-outlined text-[18px] mr-2">business</span>
                            ${user.company.name}
                        </p>
                    </div>
                `;
                userContainer.appendChild(userElement);
            });
        })
        .catch(err => {
            userContainer.innerHTML = `<p class="text-red-400">Error al cargar usuarios.</p>`;
        });
});
