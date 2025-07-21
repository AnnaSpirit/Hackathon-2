// backend/test.db.js
require('dotenv').config();
const pool = require('./db/db');

async function testConnection() {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('✅ Connected to PostgreSQL 🎉 Current time:', result.rows[0].now);
    } catch (err) {
        console.error('❌ Connection failed:', err.message);
    } finally {
        pool.end(); // Ferme proprement la connexion
    }
}

testConnection();
