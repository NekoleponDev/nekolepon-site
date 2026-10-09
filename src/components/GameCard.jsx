import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import GameArtwork from "./GameArtwork.jsx";

export default function GameCard({ game }) {
  return (
    <article className="game-card">
      <GameArtwork game={game} />

      <div className="game-info">
        <div className="game-info-top">
          <span className="pill">{game.status}</span>
          <span className="game-year">{game.platform}</span>
        </div>

        <h3>{game.name}</h3>
        <p>{game.shortDescription || game.description}</p>

        <div className="game-tags">
          {game.genre.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <Link className="game-link" to={`/games/${game.slug}`}>
          <span>DISCOVER THE GAME</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
