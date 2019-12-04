const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const vimdiesel_controller = require('../controllers/vimdiesel.controller');

router.post('/create', vimdiesel_controller.vimdiesel_create);
router.post('/create-many', vimdiesel_controller.vimdiesel_create_many);
router.get('/', vimdiesel_controller.vimdiesels);
router.get('/:id', vimdiesel_controller.vimdiesel_details);
router.put('/:id/update', vimdiesel_controller.vimdiesel_update);
router.delete('/:id/delete', vimdiesel_controller.vimdiesel_delete);

module.exports = router;