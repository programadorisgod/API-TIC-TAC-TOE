
const {getWinners, createWinner} = require("../controlles/winners");

const express = require("express");
const router = express.Router();
const path = '/api/winners'


/**
 * @swagger
 * components:
 *   schemas:
 *     Winner:
 *       type: object
 *       required:
 *         - name
 *         - time
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del ganador
 *         time:
 *           type: string
 *           description: Tiempo que ganó
 *       example:
 *         name: "X"
 *         time: "11/5/2023"
 */

/**
 * @swagger
 * /api/winners:
 *   get:
 *     summary: Obtener todos los ganadores
 *     responses:
 *       200:
 *         description: Lista de ganadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Winner'
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /api/winners:
 *  post:
 *    summary: Crear un nuevo ganador
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Winner'
 *    responses:
 *      201:
 *        description: Ganador creado exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Winner'
 *      500:
 *        description: Error del servidor
 */


router.get(`${path}` , getWinners);
router.post(`${path}` , createWinner);
module.exports = router;