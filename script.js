function Calcular(){
    const a = new Date(document.getElementById("HoraEntrada").value);
    const b = new Date(document.getElementById("HoraSaída").value);
    //Pega as datas e horas de entradas e saídas e convertemos em objetos de tipo Date
    if (a<b) {
        //Calculamos as diferenças entre as horas de entradas e saídas
        const diferenca = b - a;

        //1000*60*60 é o número de milissegundos em uma hora. Como a diferença entre as datas e horas de entrada e saída é calculada em milissegundos, precisamos converter a diferença para horas dividindo-a por 1000*60*60.
        const horas = diferenca/(1000*60*60);

        //Pegamos quantas horas o veículo permaneceu no estacionamento e multiplicamos por 15, pois cada hora é igual a 15 reais
        const valor = horas*15;

        document.getElementById("resposta").innerHTML=
        `O veículo ficou estacionado por ${horas} horas e terá que pagar R$${valor}!!`
        } else {
        document.getElementById("resposta").innerHTML=
        `o Horário de entrada deve ser menor que o horário de saída!!`
    }

}