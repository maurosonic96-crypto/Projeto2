async function carregarDados() {

    try {

        const resposta =
            await fetch("/api/system");

        const dados =
            await resposta.json();

        console.log(dados);

        document.getElementById("cpu").innerText =
            dados.cpu + "%";

        document.getElementById("ram").innerText =
            dados.ram + "%";

        document.getElementById("platform").innerText =
            dados.platform;

    } catch(error) {

        console.log(error);

    }

}

carregarDados();

setInterval(carregarDados, 2000);