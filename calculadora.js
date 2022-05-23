function calculadora() {
    const operação = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!operação || operação >= 7) {
        alert('Erro = operação inválida!');
        calculadora();
    } else {
        
        let n1 = Number(prompt('Insira o primeira valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetro inválidos!')
            calculadora();
        } else{
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperação();
            }
            function subtração() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperação();
            }
            function multiplicação() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperação();
            }
            function divisãoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperação();
            }
            function divisãoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperação();
            }
            function potenciação() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
                novaOperação();
            }
            
            function novaOperação() {
                let opção = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                
                if (opção == 1) {
                    calculadora();
                } else if (opção == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!')
                    novaOperação();
                }
            }
        } 


        if (operação == 1) {
            soma();
        } else if (operação == 2) {
            subtração();
        } else if (operação == 3) {
            multiplicação();
        } else if (operação == 4) {
            divisãoReal();
        } else if (operação == 5) {
            divisãoInteira();
        } else if (operação == 6) {
            potenciação();
        }
    }   
}

calculadora();