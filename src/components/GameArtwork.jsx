export default function GameArtwork({ game }) {
  return (
    <div className={`game-art game-art--${game.artwork || "window"}`}>
      <div className="game-art-grid" />
      <div className="game-logo">
        {game.name}
        <span>™</span>
      </div>

      <div className="window-scene" aria-hidden="true">
        <div className="window-moon" />
        <div className="window-building building-a" />
        <div className="window-building building-b" />
        <div className="window-building building-c" />
        <div className="window-floor" />
        <div className="window-plant">♣</div>
      </div>

      <p className="game-art-label">
        {game.shortDescription || game.description}
      </p>
      <span className="corner-number">GAME / {game.slug.toUpperCase()}</span>
    </div>
  );
}
