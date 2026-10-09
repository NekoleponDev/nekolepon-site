export default function MascotArt() {
  return (
    <div className="hero-art">
      <div className="art-topline">
        <span>NEKO × KLEPON</span>
        <span>FIG. 001</span>
      </div>

      <div className="sun-shape" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <span className="spark spark-a" aria-hidden="true">✳</span>
      <span className="spark spark-b" aria-hidden="true">✦</span>
      <span className="spark spark-c" aria-hidden="true">✳</span>

      <img
        className="hero-mascot"
        src="/nekolepon-cat.svg"
        alt="Nekolepon cat klepon mascot"
      />

      <div className="art-caption">
        <span className="caption-stamp">MADE TO FEEL</span>
        <span>
          OUR LITTLE
          <br />
          POCKET UNIVERSE
        </span>
      </div>

      <div className="art-side-note">
        GOOD THINGS TAKE
        <br />
        A LITTLE MAGIC.
      </div>
    </div>
  );
}
