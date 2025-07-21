\# Hackathon-2 - Playlist Duel



Draft:



1\. Duel Mode:

1 vs 1 challenge based on a randomly generated theme (e.g., “Revenge Ballads”, “Summer of Sadness”, “Baguette Fury”).



2\. Song Selection

Each player selects 3 to 5 tracks using the Spotify API.

Track filtering includes:

-- By keyword or emotion (e.g., "power", "sad", "chill")

-- By country or language (e.g., Top France, Spanish tracks)

-- Limited to the Top 200 most played Spotify tracks over the last 5 years

3\. Anonymous Voting

-- After both playlists are submitted, other users vote anonymously.

-- No usernames or player identities shown during the voting phase.

4\. Light CSS Animations

-- Gentle transitions and hover effects (e.g., pulse on vote buttons).

-- No heavy animations or resource-intensive visuals







NEXT STEP:



-- Create a Spotify Developer Account and retrieve your API keys

-- Design the PostgreSQL data models (User, Duel, Playlist, Vote)

-- Prepare backend routes:

    \*\* POST /duel → create new duel with random theme

    \*\* GET /duel/:id → retrieve playlists for voting

    \*\* POST /vote → submit a vote

    \*\* GET /top-tracks → fetch filtered tracks from Spotify API



-- Plan out React components:

    \*-\* PlaylistForm

    \*-\* VotePage

    \*-\* DuelResult

    \*-\* ThemeGenerator

