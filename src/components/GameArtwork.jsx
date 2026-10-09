export default function GameArtwork({ game, variant = "cover" }) {
  const image = variant === "card"
    ? game.cardImage || game.coverImage
    : game.coverImage || game.cardImage;

  return (
    <div className={`game-art ${image ? "game-art--image" : "game-art--placeholder"}`}>
      {image ? (
        <img className="game-art-image" src={image} alt={`${game.name} game artwork`} loading="lazy" />
      ) : (
        <>
          <div className="game-art-grid" />
          <div className="game-logo">{game.name}</div>
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
        </>
      )}
    </div>
  );
}
