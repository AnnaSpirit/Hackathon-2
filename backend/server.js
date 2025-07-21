// Chargement manuel du fichier .env en précisant le chemin absolu
// Cela garantit que les variables d'environnement sont bien lues même si le script est lancé depuis un autre dossier
require('dotenv').config({ path: __dirname + '/.env' });
require('dotenv').config();

// console.log("🧪 TEST 1 - DB_USER:", process.env.DB_USER);
// console.log("🧪 TEST 2 - Entire ENV:", process.env);


// backend/server.js
require('dotenv').config();

// console.log("🧪 TEST ENV:", process.env.DB_USER);


const express = require("express");
const app = express();
const cors = require("cors");
const duelRoutes = require("./routes/duel.routes");

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use("/duel", duelRoutes);

// Port d'écoute
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🎧 Server is running on port ${PORT}... Ready to duel! ⚔️`);
});

// AnnaSpirit
