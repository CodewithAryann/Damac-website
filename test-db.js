// const sql = require('mssql');

// const config = {
//   user: 'realestate',
//   password: 'Dubai@2020',
//   server: 'localhost', // use 'localhost' or your actual machine name
//   database: 'RealEstate',
//   options: {
//     encrypt: false,
//     trustServerCertificate: true
//   }
// };

// async function testConnection() {
//   try {
//     await sql.connect(config);
//     const result = await sql.query`SELECT TOP 1 * FROM dbo.Properties`;
//     console.log('✅ Connected successfully!');
//     console.log(result.recordset);
//   } catch (error) {
//     console.error('❌ Connection failed:', error);
//   } finally {
//     await sql.close();
//   }
// }

// testConnection();
