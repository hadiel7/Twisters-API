import { Router } from "express"
import { alertas } from "../alerts.js"

const routerServeryt = Router();

routerServeryt.get ("/alto", (req, res) =>{
    const alertaAlto = alertas.filter((obj) =>{
        return obj.severity.includes("Alto");
    })
    res.send(alertaAlto);
});


routerServeryt.get ("/medio", (req, res) =>{
    const alertaMedio = alertas.filter((obj) =>{
        return obj.severity.includes("Médio");
        })
    
        res.send(alertaMedio);
    });


routerServeryt.get ("/critico", (req, res) =>{
    const alertaCritico = alertas.filter((obj) =>{
        return obj.severity.includes("Crítico");
        });   

        res.send(alertaCritico);
});

export default routerServeryt;