const router = require('express').Router();
const prefix = '';
const controller = require('../controllers/aplications.controller');

router.get(`${prefix}/`, controller.getAplications);
router.post(`${prefix}/`, controller.saveAplication);
router.get(`${prefix}/:id`, controller.getAplicationsById);
router.put(`${prefix}/:id`, controller.updateAplication);
router.delete(`${prefix}/:id`, controller.deleteAplication);
module.exports = router;