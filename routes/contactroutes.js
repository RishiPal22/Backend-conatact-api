const express = require('express');
const { getContacts,createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController');
const validate = require('../middleware/validatehandler');
const app = express()
const router = express.Router()

router.use(validate);
router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;