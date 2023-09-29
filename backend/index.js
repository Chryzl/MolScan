const express = require('express');
const { PORT } = require('./config.js')
var utils = require('./utils.js')

const app = express ();
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});

app.get("/help", async (request, response) => {
    let { stdout } = await utils.sh("osra --help");

    response.send(stdout);
})
