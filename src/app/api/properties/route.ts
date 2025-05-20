import { NextResponse } from 'next/server';
import sql from 'mssql';

const config: sql.config = {
  user: process.env.MSSQL_USER || '',
  password: process.env.MSSQL_PASSWORD || '',
  server: process.env.MSSQL_SERVER || '',
  database: process.env.MSSQL_DATABASE || '',
  options: {
    encrypt: process.env.MSSQL_ENCRYPT === 'true',
    trustServerCertificate: true,
  },
};

export async function GET() {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM dbo.Properties`;

    const cleanData = result.recordset.filter(
      (row) =>
        row.title &&
        row.location &&
        row.property &&
        row.bedrooms &&
        row.price &&
        row.images
    );

    return NextResponse.json(cleanData);
  } catch (error) {
    console.error('🔥 Full DB error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
