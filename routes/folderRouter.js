const express = require ('express');
const folderController = require ('../controller/folderController');
const router = express.Router ();

router.post ('/new', folderController.createFolder);
router.delete ('/:id', folderController.deleteFolder);

module.exports = router;
