'use strict';

const con = require ('../db.config');

const User = function (user) {
  this.name = user.name;
  this.email = user.email;
  this.password = user.password;
  this.my_folders = user.my_folders;
  this.my_files = user.my_files;
};

User.create = function (newUser) {
  con.query ('INSERT INTO users set ?', newUser, function (err, res) {
    if (err) {
      console.log (err);
    } else {
      console.log (res.insertId);
    }
  });
};
module.exports = User;
