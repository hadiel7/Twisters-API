import express from "express";
import router from "./routes/principal.routes.js";
import routerServeryt from "./routes/severity.routes.js";

const app = express()
const PORT = 3000

app.use("/Twisters/serveryt", routerServeryt);

app.use ("/Twisters", router);

app.listen (PORT, () => {
    console.log(`Servidor está na porta ${PORT}`);
})

