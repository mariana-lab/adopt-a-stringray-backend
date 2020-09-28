const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const stringray_controller = require('../controllers/stringray.controller');

router.get('/', stringray_controller.stringrays);
router.get('/:id', stringray_controller.stringray_details);

router.post('/create', stringray_controller.stringray_create);
router.post('/create-many', stringray_controller.stringray_create_many);
router.put('/:id/update', stringray_controller.stringray_update);
router.delete('/:id/delete', stringray_controller.stringray_delete);
module.exports = router;