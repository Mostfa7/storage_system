'use strict';

const con = require ('../db.config');

let Folder = function (folder) {
  this.name = folder.name;
  this.is_empty = folder.is_empty; //note fix initial value true
  this.is_parent = folder.is_parent;
  this.parent_id = folder.parent_id;
  this.created_by = folder.created_by;
};

Folder.create = function (newFolder) {
  con.query ('INSERT INTO folders set ?', newFolder, function (err, res) {
    if (err) {
      console.log (err);
    } else {
      console.log (res.insertId);
    }
  });
};

Folder.delete = function (folderId) {
  //   con.query ('SET FOREIGN_KEY_CHECKS = 0');
  con.query ('SET FOREIGN_KEY_CHECKS = 0;', function (err, res) {
    if (err) {
      console.log (err);
    } else {
      console.log (res);
    }
  });
  con.query (
    'DELETE FROM folders WHERE is_empty=1 and id = ?;',
    [folderId],
    function (err, res) {
      if (err) {
        console.log (err);
      } else {
        console.log (res);
      }
    }
  );
  con.query ('SET FOREIGN_KEY_CHECKS = 1;', function (err, res) {
    if (err) {
      console.log (err);
    } else {
      console.log (res);
    }
  });
};

module.exports = Folder;
