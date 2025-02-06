const routes = {
    calcLDL: 'calcLDL.html',
    calcIMC: 'calcIMC.html',
    calcTFG: 'calcTFG.html',
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