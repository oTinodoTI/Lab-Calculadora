const routes = {
    calcLDL: '/calcLDL',
    calcIMC: '/calcIMC',
    calcTFG: '/calcTFG',
};

function redirect(routeKey) {
    const error = document.getElementById("error");
    const page = routes[routeKey];
    if (page) {
        window.location.href = page;
    } else {
        error.style.display = "block";
        error.textContent = "Página não encontrada";
    }
};