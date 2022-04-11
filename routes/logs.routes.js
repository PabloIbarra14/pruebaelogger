const router = require('express').Router();
const prefix = '';

const controller = require('../controllers/logs.controller');

router.get(`${prefix}/`, controller.getLogs);
router.post(`${prefix}/`, controller.saveLog);
router.get(`${prefix}/:id`, controller.getLogsById);
router.put(`${prefix}/:id`, controller.updateLog);
router.delete(`${prefix}/:id`, controller.deleteLog);

module.exports = router;