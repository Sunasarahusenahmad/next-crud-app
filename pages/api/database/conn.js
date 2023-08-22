import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "next_crud",
});

const conn = pool.promise();

// Test the database connection
conn
  .getConnection()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

export default conn;
