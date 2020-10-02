const File = require ('../model/fileModel');
const multer = require ('multer');

exports.deleteFile = async (req, res) => {
  try {
    console.log (req.params.id);
    const file = await File.delete (req.params.id, req.body);
    res.status (200).json ({
      status: 'succes',
    });
  } catch (err) {
    console.log (err);
  }
};

const multerStorages = multer.diskStorage ({
  destination: (req, res, cb) => {
    cb (null, 'view');
  },
  filename: (req, file, cb) => {
    // user-e28eu98(ID)eu1e8u38-1221(timestamp)212.jpeg
    const ext = file.mimetype.split ('/')[1];
    cb (null, `user-1${Date.now ()}.${ext}`);
  },
});

const uploads = multer ({
  storage: multerStorages,
});

exports.uploadUserFiles = uploads.single ('myFile');
exports.uploadFile = async (req, res) => {
  try {
    console.log (req.body);
    var name = req.file.filename;
    var size = req.file.size;
    var path_on_disk = req.file.path;
    var parent_id = req.body.parent_id;
    var created_by = req.body.created_by;

    const file = await File.create ({
      name,
      size,
      path_on_disk,
      parent_id,
      created_by,
    });
    res.status (201).json ({
      status: 'succes',
      file,
    });
  } catch (err) {
    console.log (err);
  }
};
