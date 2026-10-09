import Eyebrow from "../components/Eyebrow.jsx";
import GameCard from "../components/GameCard.jsx";
import games from "../data/games.js";

export default function GamesPage() {
  return (
    <main className="inner-page">
      <Eyebrow>OUR LITTLE UNIVERSES</Eyebrow>
      <h1>
        Made to <span>be felt.</span>
      </h1>
      <p className="inner-intro">
        Every game begins with a feeling. These are the worlds we're bringing to life.
      </p>

      <div className="inner-games">
        {games.length > 0 ? (
          <div className="games-grid">
            {games.map((game) => (
              <GameCard game={game} key={game.slug} />
            ))}
          </div>
        ) : (
          <p className="empty-games">New worlds are in the works. Check back soon.</p>
        )}
      </div>
    </main>
  );
}
