const pool = require('../db/db');

// Fonction pour créer un duel
const createDuel = async (req, res) => {
    const { theme, player1_id, player2_id } = req.body;

    console.log("POST data received:", req.body);

    try {
        const query = `
            INSERT INTO duels (theme, player1_id, player2_id)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const values = [theme, player1_id, player2_id];
        const result = await pool.query(query, values);

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("🛑 SQL Error:", error); // <-- Ce log est essentiel
        res.status(500).json({ error: "Internal Server Error 🧨" });
    }
};

// On exporte la fonction à l’ancienne
module.exports = {
    createDuel,
};
