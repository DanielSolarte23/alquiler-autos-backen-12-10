import { Router } from "express";
import { authRequire } from '../middlewares/validateToken.js'
import { getAuto, getAutos, agregarAuto, deleteAuto, updateAuto } from "../controller/auto.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import  validateAutoShema  from "../schemas/auto.schema.js";

const router = Router()

router.get('/autos', authRequire, getAutos)
router.get('/autos/:id', authRequire, getAuto)
router.post('/autos', authRequire, validateSchema(validateAutoShema), agregarAuto)
router.delete('/autos/:id', authRequire, deleteAuto)
router.put('/autos/:id', authRequire, updateAuto)

export default router

