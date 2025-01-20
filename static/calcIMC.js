function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;
    const idade = document.getElementById('idade').value;

    document.getElementById('erroIMC').textContent = '';
    document.getElementById('resultadoIMC').textContent = '';

    if (isNaN(peso) || isNaN(altura) || isNaN(idade) || peso <= 0 || altura <= 0) {
        document.getElementById('erroIMC').textContent = 'Por favor, insira valores válidos para todos os campos'
        return;
    }

    const imc = peso / (altura * altura);

    let faixaIMC = '';
    if (sexo === 'masculino') {
        if (imc < 20.7) {
            faixaIMC = 'Abaixo do peso';
        } else if (imc >= 20.7 && imc < 26.4) {
            faixaIMC = 'Peso normal';
        } else if (imc >= 26.4 && imc < 27.8) {
            faixaIMC = 'Sobrepeso';
        } else {
            faixaIMC = 'Obesidade';
        }
    } else if (sexo === 'feminino') {
        if (imc < 19.1) {
            faixaIMC = 'Abaixo do peso';
        } else if (imc >= 19.1 && imc < 25.8) {
            faixaIMC = 'Peso normal';
        } else if (imc >= 25.8 && imc < 27.3) {
            faixaIMC = 'Sobrepeso';
        } else {
            faixaIMC = 'Obesidade';
        }
    } else {
        faixaIMC = 'Sexo Inválido';
    };

    if (idade > 65) {
        faixaIMC += ' (Considere fatores adicionais devido à idade)'
    }

    document.getElementById('resultadoIMC').textContent = `O valor do IMC é: ${imc.toFixed(2)} kg/m². Faixa: ${faixaIMC}`;
}