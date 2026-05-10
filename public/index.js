async function carregarDados() {

    const resposta = await fetch("/api/system");

    const dados = await resposta.json();

    document.getElementById("cpu").innerText =
        dados.cpu + "%";

    document.getElementById("ram").innerText =
        dados.ram + "%";

    document.getElementById("platform").innerText =
        dados.platform;

}

carregarDados();

setInterval(carregarDados, 2000);