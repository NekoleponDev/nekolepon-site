const phrases = [
  "PLAY WITH PURPOSE",
  "STORIES THAT STICK",
  "MADE WITH HEART"
];

function TickerGroup() {
  return (
    <span className="ticker-group" aria-hidden="true">
      {phrases.map((phrase, index) => (
        <span className="ticker-item" key={phrase}>
          {phrase}
          {index < phrases.length - 1 && <b>✳</b>}
        </span>
      ))}
      <b>✳</b>
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" aria-label={phrases.join(". ")}>
      <div className="ticker-track">
        <TickerGroup />
        <TickerGroup />
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
