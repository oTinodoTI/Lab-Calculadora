function calcularLDL() {
    // Obter os valores das entradas
    const colesterolTotal = parseFloat(document.getElementById('colesterolTotal').value);
    const colesterolHDL = parseFloat(document.getElementById('colesterolHDL').value);
    const triglicerides = parseFloat(document.getElementById('triglicerides').value);

    // Resetar a área de erro
    document.getElementById('erro').textContent = '';
    document.getElementById('resultado').textContent = '';

    // Verificar se todos os campos estão preenchidos e são números válidos
    if (isNaN(colesterolTotal) || isNaN(colesterolHDL) || isNaN(triglicerides) ||
        colesterolTotal <= 0 || colesterolHDL <= 0 || triglicerides <= 0) {
        document.getElementById('erro').textContent = 'Por favor, insira valores válidos para todos os campos.';
        document.getElementById('copiarLDLCheck').style.display = 'none';
        return;
    }

    // Aplicar a fórmula para calcular o colesterol LDL
    const ldl = colesterolTotal - colesterolHDL - (triglicerides / 5);

    // Exibir o resultado
    document.getElementById('resultado').textContent = `O valor do Colesterol LDL é: ${ldl.toFixed(2)} mg/dL`;

    // Mostrar o botão de copiar
    document.getElementById('copiarLDLCheck').style.display = 'inline-block';
    document.getElementById('copiarLDLCheck').setAttribute('data-ldl', ldl.toFixed(2));
}

function copiarLDL() {
    // Obter o valor do LDL armazenado no botão
    const ldl = document.getElementById('copiarLDLCheck').getAttribute('data-ldl');

    // Criar um elemento de input temporário para copiar o valor
    const tempInput = document.createElement('input');
    tempInput.value = ldl;
    document.body.appendChild(tempInput);

    // Selecionar o valor do input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copiar o valor para a área de transferência
    document.execCommand('copy');

    // Remover o input temporário
    document.body.removeChild(tempInput);

    // Mostrar feedback visual de "check"
    const checkIcon = document.getElementById('checkIcon');
    
    // Adicionar a classe para exibir o "check"
    checkIcon.classList.add('show');
    
    // Remover o "check" após 400ms (duração da animação)
    setTimeout(function() {
        checkIcon.classList.remove('show');
    }, 400);
}
