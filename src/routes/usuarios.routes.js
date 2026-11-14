import { Router } from "express";
import {
  registrarUsuario,
  loginUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/usuarios.controllers.js";
import jwtVerificacion from "../middlewares/token.verificacion.js";
import validarAdmin from "../middlewares/validarAdmin.js";
import {obtenerPerfil} from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);

router.get("/perfil", jwtVerificacion, obtenerPerfil);

router.get("/", jwtVerificacion, validarAdmin, obtenerUsuarios);
router.get("/:id", jwtVerificacion, validarAdmin, obtenerUsuarioPorId);
router.put("/:id", jwtVerificacion, validarAdmin, actualizarUsuario);
router.delete("/:id", jwtVerificacion, validarAdmin, eliminarUsuario);

export default router;