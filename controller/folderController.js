const Folder = require ('../model/folderModel');

exports.createFolder = async (req, res) => {
  try {
    const folder = await Folder.create (req.body);
    res.status (201).json ({
      status: 'succes',
      folder,
    });
  } catch (err) {
    console.log (err);
  }
};
exports.deleteFolder = async (req, res) => {
  try {
    const folder = await Folder.delete (1, req.params);
    res.status (200).json ({
      status: 'succes',
    });
  } catch (err) {
    console.log (err);
  }
};
