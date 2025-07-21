// backend/controllers/duel.controller.js

// Fonction de test pour vérifier que le contrôleur est bien appelé
const getDuelHome = (req, res) => {
    res.send("⚔️ Welcome to Playlist Duel backend!");
};

// Export de la fonction pour pouvoir l'utiliser dans les routes
module.exports = {
    getDuelHome
};
