const express = require('express');
const router = express.Router();
const { createApplication, getApplications } = require('../controllers/applicationController');

router.post('/applications', createApplication);
router.get('/applications', getApplications);

module.exports = router;
