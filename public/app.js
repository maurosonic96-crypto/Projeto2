async function carregarDados() {

    try {

        const resposta =
            await fetch("/api/system");

        const dados =
            await resposta.json();

        document.getElementById("cpu").innerText =
            dados.cpu + "%";

        document.getElementById("ram").innerText =
            dados.ram + "%";

        document.getElementById("platform").innerText =
            dados.platform;

        document.getElementById("hostname").innerText =
            dados.hostname;

        document.getElementById("node").innerText =
            dados.node;

        document.getElementById("cloud").innerText =
            dados.cloud;

    } catch(error) {

        console.log(error);

    }

}

carregarDados();

setInterval(carregarDados, 2000);