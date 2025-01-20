function calcularTFG() {
    const sexo = document.getElementById('sexo').value;
    const idade = document.getElementById('idade').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const crea = parseFloat(document.getElementById('creatinina').value);

    document.getElementById('erroTFG').textContent = '';
    document.getElementById('resultadoTFG').textContent = '';

    if (isNaN(peso) || isNaN(crea) || isNaN(idade) || peso <= 0 || crea <= 0 || idade === '' || sexo === '' || sexo === 'Selecione') {
        document.getElementById('erroTFG').textContent = 'Por favor, insira valores válidos para todos os campos'
        return;
    }

    let tfg = (140 - idade) * peso / (72 * crea);

    let faixaTFG = '';
    if (sexo === 'masculino') {
        if (tfg >= 90) {
            faixaTFG = 'Normal';
        } else if (tfg >= 60 && tfg < 90) {
            faixaTFG = 'Levemente diminuída';
        } else if (tfg >= 30 && tfg < 60) {
            faixaTFG = 'Moderadamente diminuída';
        } else {
            faixaTFG = 'Gravemente diminuída';
        }
    } else if (sexo === 'feminino') {
        if (tfg >= 90) {
            faixaTFG = 'Normal';
        } else if (tfg >= 60 && tfg < 90) {
            faixaTFG = 'Levemente diminuída';
        } else if (tfg >= 30 && tfg < 60) {
            faixaTFG = 'Moderadamente diminuída';
        } else {
            faixaTFG = 'Gravemente diminuída';
        }
    } else {
        faixaTFG = 'Sexo Inválido';
    };

    if (isNaN(tfg) || tfg <= 0 || tfg === Infinity || tfg === -Infinity || tfg === null || tfg === '' || tfg === undefined) {
        document.getElementById('erroTFG').textContent = 'Algo deu errado, por favor, avise ao Tino';
        return;
    }

    document.getElementById('resultadoTFG').textContent = `O valor da TFG é: ${tfg.toFixed(2)} ml/min e a classificação é: ${faixaTFG}`;
}