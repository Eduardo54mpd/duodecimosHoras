function autoDuodecimo() {
    let exibeRelogio = document.getElementById("relogioReal"); // Tag onde algoritmo enviará as saídas (linhas 2-4)
    let exibeHora = document.getElementById("hora");
    let exibeMiliduodecimo = document.getElementById("miliduodec");

    const agora = new Date(); // Dados de entrada: coleta horas, minutos e segundos do sistema (linhas 5-8)
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    let exibeHoras = horas < 10 ? "0" + horas : horas; // Formata horas para 2 dígitos  
    let exibeMinutos = minutos < 10 ? "0" + minutos : minutos; // Formata minutos para 2 dígitos
    let exibeSegundos = segundos < 10 ? "0" + segundos : segundos; // Formata segundos para 2 dígitos
    
    exibeRelogio.innerHTML = `<p>${exibeHoras}:${exibeMinutos}:${exibeSegundos}</p>`; // Exibe horas, minutos e segundos no formato 00:00:00

    const duodecimo = parseInt(minutos / 5); // Conversão de minutos para duodécimos
    const miliduodecimo = parseInt(segundos / 5 ); // Conversão de segundos para miliduodécimos

    // Conversão de horas em número para horas em extenso 
    const horaExtens = {
        1: 'primeira', 2: 'segunda', 3: 'terceira',
        4: 'quarta', 5: 'quinta', 6: 'sexta',
        7: 'sétima', 8: 'oitava', 9: 'nona',
        10: 'décima', 11: 'undécima', 12: 'duodécima'
    };

    // Cálculo de horas
    let horaConvert = 0;
    if (horas <= 6) {
        horaConvert = horas + 6;
    } else if (horas >= 7 && horas <= 18) {
        horaConvert = horas - 6;
    } else {
        horaConvert = horas - 18;
    }

    // Verifica o ciclo
    function ciclo(hora) {
        if (horas >= 7 && horas <= 18) {
            return `${hora} (diurna)`;
        } else {
            return `${hora} noturna`;
        }
    }

    const hora = ciclo(horaExtens[horaConvert]); // Retoma dados a partir do dicionário e do valor do cálculo de horas

    // Possíveis saídas dependendo do valor dos duodécimos
    if (duodecimo < 2) {
        if (duodecimo == 0) {
            exibeHora.innerHTML = `<p>É a hora <i>${hora}</i></p>`;
        } else {
            exibeHora.innerHTML = `<p>É 1 duodécimo da hora <i>${hora}</i></p>`;
        }
    } else {
        exibeHora.innerHTML = `<p>São ${duodecimo} duodécimos da hora <i>${hora}</i></p>`;
    }
    exibeMiliduodecimo.innerHTML = `<p>Miliduodécimos: ${miliduodecimo}</p>`;
}

setInterval(autoDuodecimo, 1000); // Atualiza as medidas a cada 1 segundo (1000 milisegundos)
autoDuodecimo(); // Invoca a função
