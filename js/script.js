function ver_hora(){
    let mihora = new Date();
    let horas = mihora.getHours().toString();
    let minutos = mihora.getMinutes().toString();
    if (minutos.length == 1) minutos = "0" + minutos;
    let segundos = mihora.getSeconds().toString();
    if (segundos.length == 1) segundos = "0" + segundos;
    document.forms[0].mireloj.value = horas + ":" + minutos + " " + segundos;
}

let r = setInterval("ver_hora()", 500);