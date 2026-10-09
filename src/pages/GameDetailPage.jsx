import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import GameArtwork from "../components/GameArtwork.jsx";
import NotFound from "./NotFound.jsx";
import { getGameBySlug } from "../data/games.js";

export default function GameDetailPage() {
  const { slug } = useParams();
  const game = getGameBySlug(slug);

  if (!game) {
    return <NotFound />;
  }

  return (
    <main className="inner-page game-detail">
      <Link className="back-link" to="/games">← ALL GAMES</Link>

      <GameArtwork game={game} />
      <Eyebrow>{game.status}</Eyebrow>
      <h1>{game.name}</h1>
      <p className="inner-intro">{game.description}</p>

      <section className="game-metadata">
        <div className="metadata-group">
          <h2>PLATFORMS</h2>
          <div className="platform-list platform-list--detail">
            {(game.platforms || []).map((platform) => (
              <span className="platform-badge" key={platform}>{platform}</span>
            ))}
          </div>
        </div>

        <div className="metadata-group">
          <h2>GENRES</h2>
          <div className="game-tags">
            {game.genre.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <p className="detail-note">{game.tagline || "More details coming soon."}</p>
      <Link className="button button-dark" to="/contact">
        ASK US ABOUT {game.name.toUpperCase()}
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </main>
  );
}
