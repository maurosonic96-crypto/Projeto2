const express = require("express");
const cors = require("cors");
const si = require("systeminformation");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.static("public"));

app.get("/api/system", async (req, res) => {

    const cpu = await si.currentLoad();
    const mem = await si.mem();
    const os = await si.osInfo();

    res.json({
        cpu: cpu.currentLoad.toFixed(2),
        ram: ((mem.used / mem.total) * 100).toFixed(2),
        hostname: os.hostname,
        platform: os.platform,
        arch: os.arch,
        node: process.version
    });

});

app.listen(3000, () => {
    console.log("Servidor rodando");
});