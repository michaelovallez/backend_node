'use strict'
var express = require('express');
var projectController = require('../controllers/projectController');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});
router.get('/home', projectController.home);
router.post('/test', projectController.test);

/**
 * rutas endpoint project
 */
router.get('/project/:id?', projectController.index);
router.post('/project', projectController.create);
router.put('/project/:id', projectController.update);
router.delete('/project/:id', projectController.delete);
router.post('/project/upload-image/:id', multipartMiddleware, projectController.uploadImage);

module.exports = router;