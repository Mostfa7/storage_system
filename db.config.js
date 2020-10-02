const mysql = require ('mysql');
const con = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  database: 'storage_system',
});
con.connect (err => {
  err ? console.log (err) : console.log ('Connected');
});

module.exports = con;
