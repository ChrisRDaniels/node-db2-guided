// Update with your config settings.

module.exports = {
 client: "sqlite3", // specifies DBMS
 useNullAsDefault: true, // a flag required for SQLITE
 connection: {
  filename: "./data/produce.db3" // location of db file
 }
};
