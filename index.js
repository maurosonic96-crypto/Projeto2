const express = require("express");

const cors = require("cors");

const si = require("systeminformation");

const app = express();

app.use(cors());

app.use(express.static("public"));

app.get("/api/system", async (req, res) => {

    try {

        const cpu = await si.currentLoad();

        const mem = await si.mem();

        const os = await si.osInfo();

        res.json({

            cpu: cpu.currentLoad.toFixed(2),

            ram: ((mem.used / mem.total) * 100).toFixed(2),

            platform: os.platform,

            hostname: os.hostname,

            arch: os.arch,

            node: process.version,

            cloud: process.env.RENDER
                ? "RUNNING ON RENDER"
                : "LOCAL MACHINE"

        });

    } catch(error) {

        res.status(500).json({

            erro: error.message

        });

    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("Servidor rodando");

});