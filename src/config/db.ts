const mysql = require('mysql2/promise');

// Create a pool for handling multiple connections
const db = mysql.createPool({
  host: 'localhost',
  user: 'jayanuwan',
  password: 'password',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = {
  async execute(query: any, params: any) {
    const connection = await db.getConnection();
    try {
      const [rows, fields] = await connection.execute(query, params);
      return [rows, fields];
    } finally {
      connection.release(); // Release the connection back to the pool
    }
  }
};

export default db