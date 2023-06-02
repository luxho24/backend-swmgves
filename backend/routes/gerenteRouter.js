import { Router } from "express";
import {
  obtenerGerentes,
  obtenerGerente,
  agregarGerente,
  actualizarGerente,
  eliminarGerente,
} from "../controllers/gerenteController.js";

const router = Router();

router.route("/").get(obtenerGerentes).post(agregarGerente);
router
  .route("/:id")
  .get(obtenerGerente)
  .put(actualizarGerente)
  .delete(eliminarGerente);

export default router;
