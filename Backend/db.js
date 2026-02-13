const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "wolfiee",   // your new user
  password: "Koyuki@1224!",
  database: "cyber_security"
});

module.exports = pool;
