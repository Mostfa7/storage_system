'use strict';

const con = require ('../db.config');

const File = function (file) {
  this.name = files.name;
  this.size = files.size;
  this.path_on_disk = files.path_on_disk;
  this.parent_id = files.parent_id;
  this.created_by = files.created_by;
};

File.create = function (size, path_on_disk, paren_id, created_by) {
  con.query ('SET FOREIGN_KEY_CHECKS = 0;', function (err, res) {
    if (err) {
      console.log (err);
    } else {
      console.log (res);
    }
  });
  con.query (
    'INSERT INTO files set ?',
    [size, path_on_disk, paren_id, created_by],
    function (err, res) {
      if (err) {
        console.log (err);
      } else {
        console.log (res.insertId);
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

File.delete = function (fileId, userId) {
  console.log ('hey', userId.id);
  con.query ('SET FOREIGN_KEY_CHECKS = 0;', function (err, res) {
    if (err) {
      console.log (err);
    } else {
      console.log (res);
    }
  });
  con.query (
    `DELETE FROM files WHERE created_by=${userId.id} and id = ${fileId}`,
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
File.findById = function (fileId, limit) {
  // pagenation we will back
  con.query ('SELECT *  FROM file LIMIT 5 WHERE id = ?', [fileId], function (
    err,
    res
  ) {
    if (err) {
      console.log (err);
    } else {
      console.log (res);
    }
  });
};

module.exports = File;
