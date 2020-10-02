const express = require ('express');
const fileController = require ('../controller/fileController');
const router = express.Router ();

router.delete ('/:id', fileController.deleteFile);
router.post (
  '/file',
  fileController.uploadUserFiles,
  fileController.uploadFile
);

module.exports = router;
