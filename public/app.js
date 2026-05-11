// ===== TAILS SYSTEM DASHBOARD — app.js =====

function animateValue(elementId, newText) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (el.innerText === newText) return;
    el.innerText = newText;
    el.classList.remove("updated");
    void el.offsetWidth; // force reflow
    el.classList.add("updated");
}

function updateMeter(barId, percent) {
    const bar = document.getElementById(barId);
    if (!bar) return;
    const value = Math.min(100, Math.max(0, parseFloat(percent)));
    bar.style.width = value + "%";
}

async function carregarDados() {

    try {

        const resposta = await fetch("/api/system");
        const dados = await resposta.json();

        animateValue("cpu", dados.cpu + "%");
        animateValue("ram", dados.ram + "%");
        animateValue("platform", dados.platform);
        animateValue("hostname", dados.hostname);
        animateValue("node", dados.node);
        animateValue("cloud", dados.cloud);

        updateMeter("cpu-bar", dados.cpu);
        updateMeter("ram-bar", dados.ram);

    } catch (error) {

        console.log("Erro ao carregar dados:", error);

    }

}

carregarDados();

setInterval(carregarDados, 2000);
