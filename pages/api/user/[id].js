import conn from "../database/conn";

export default async function handler(req, res) {
  const { id } = req.query; // Get the dynamic ID from the URL parameter

  if (req.method === "GET") {
    try {
      const q = "SELECT * FROM nx_user WHERE id = ?";
      const [rows] = await conn.query(q, [id]);

      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      res.status(500).json({ error: 1 });
    }
  }

  if (req.method === "PATCH") {
    const { name, email, contact } = req.body;

    try {
      const q =
        "UPDATE nx_user SET name = ?, email = ?, contact = ? WHERE id = ? ";
      const data = [name, email, contact, id];
      const [rows] = await conn.query(q, data);

      // Process the data and send the response
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: 1, errmsg: "Error in Updating User" });
    }
  }

  if (req.method === "DELETE") {
    try {
      // Query the database
      const q = "DELETE FROM nx_user WHERE id = ?";
      const [rows] = await conn.query(q, [id]);

      // Process the data and send the response
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: 1 });
    }
  }
}
