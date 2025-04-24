import { Router } from "express";
import { alertas } from "../alerts.js";

 const router = Router ();

router.get ("/", (req, res) => {
  res.send(alertas);
 }) 

 export default router;