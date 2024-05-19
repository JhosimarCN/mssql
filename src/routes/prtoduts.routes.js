import { Router } from "express";

import { obtenerProducto,obtenerProductos,creandoProductos,actualizandoProductos,eliminarProductos } from "../controllers/produts.controllers.js";

const router = Router()

router.get('/productos',obtenerProducto)

router.get('/productos/:id',obtenerProductos)

router.post('/productos/:id', obtenerProductos)

router.put('/productos/:id',actualizandoProductos)

router.delete('/productos/:id',eliminarProductos)

export default router;