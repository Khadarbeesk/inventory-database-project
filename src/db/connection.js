const sqlite3 = require("sqlite3").verbose();

// ✅ store in variable
const db = new sqlite3.Database(__dirname + "/database.db", (err) => {
  if (err) console.error(err.message);
  else console.log("Connected to SQLite DB");
});

module.exports = db;

