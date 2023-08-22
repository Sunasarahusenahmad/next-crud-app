import conn from "../database/conn";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { name, email, contact } = req.body;

    try {
      const q =
        "INSERT INTO nx_user (`name`, `email`, `contact`) VALUES (?, ?, ?)"; // insert query
      const data = [name, email, contact];
      const [rows] = await conn.query(q, data);
      res.status(200).json(rows); // Process the data and send the response
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: 1, errmsg: "Error in Adding User" });
    }
  }

  if (req.method == "GET") {
    try {
      const q = "SELECT * FROM nx_user";
      const [rows] = await conn.query(q);

      // Process the data and send the response
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: 1, errmsg: "Error in Getting Users" });
    }
  }
}
