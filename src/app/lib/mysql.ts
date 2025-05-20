import sql from 'mssql';

const config: sql.config = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  server: process.env.MSSQL_SERVER || 'localhost',
  database: process.env.MSSQL_DATABASE,
  options: {
    encrypt: false, // use true if you're on Azure
    trustServerCertificate: true, // required for development
  },
};

let pool: sql.ConnectionPool | null = null;

export const getDbPool = async () => {
  if (pool) return pool;
  pool = await sql.connect(config);
  return pool;
};
