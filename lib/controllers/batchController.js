/**
 * @swagger
 * paths:
 *  /batches:
 *    get:
 *      tags: [Batches]
 *      summary: Returns all batches
 *      responses:
 *        200:
 *          description: List of all batches
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref:
 *                    "#/components/schemas/Batch"
 */

// libs
const express = require('express');

// helpers
const { api } = require('../helpers');

// repositories
const { batchRepository } = require('../repositories');

// instantiate router
const router = new express.Router();

router.get('/', async (req, res) => {
  let results;
  try {
    results = await batchRepository.all();
    return res.json(api.response.success(results)).end();
  } catch (ex) {
    return res.status(500).json(api.response.error('Unable to list all batches.', ex.message)).end();
  }
});

router.post('/create', async (req, res) => {
  let results;
  try {
    results = await batchRepository.create(req.body);
    return res.json(api.response.success(results)).end();
  } catch (ex) {
    return res.status(500).json(api.response.error('Unable to create batch', ex.message)).end();
  }
});

module.exports = router;
