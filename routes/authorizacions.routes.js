const router = require('express').Router();
const prefix = '';

const controller = require('../controllers/authorizations.controller');

router.get(`${prefix}/`, controller.getAuthorizations);
router.post(`${prefix}/`, controller.saveAuthorization);
router.get(`${prefix}/:id`, controller.getAuthorizationsById);
router.put(`${prefix}/:id`, controller.updateAuthorization);
router.delete(`${prefix}/:id`, controller.deleteAuthorization);

module.exports = router;