function calcularLDL() {
    const colesterolTotal = parseFloat(document.getElementById('colesterolTotal').value);
    const colesterolHDL = parseFloat(document.getElementById('colesterolHDL').value);
    const triglicerides = parseFloat(document.getElementById('triglicerides').value);

    document.getElementById('erro').textContent = '';
    document.getElementById('resultado').textContent = '';

    if (isNaN(colesterolTotal) || isNaN(colesterolHDL) || isNaN(triglicerides) ||
        colesterolTotal <= 0 || colesterolHDL <= 0 || triglicerides <= 0) {
        document.getElementById('erro').textContent = 'Por favor, insira valores válidos para todos os campos.';
        document.getElementById('copiarLDLCheck').style.display = 'none';
        return;
    }

    const ldl = colesterolTotal - colesterolHDL - (triglicerides / 5);

    document.getElementById('resultado').textContent = `O valor do Colesterol LDL é: ${ldl.toFixed(2)} mg/dL`;

    document.getElementById('copiarLDLCheck').style.display = 'inline-block';
    document.getElementById('copiarLDLCheck').setAttribute('data-ldl', ldl.toFixed(2));
}

function copiarLDL() {
    const ldl = document.getElementById('copiarLDLCheck').getAttribute('data-ldl');

    const tempInput = document.createElement('input');
    tempInput.value = ldl;
    document.body.appendChild(tempInput);

    tempInput.select();

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    const checkIcon = document.getElementById('checkIcon');
    
    checkIcon.classList.add('show');
    
    setTimeout(function() {
        checkIcon.classList.remove('show');
    }, 400);
}

function voltar() {
    window.location.href = "/Lab-Calculadora-main/Home/index.html"
}