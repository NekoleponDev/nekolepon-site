export default function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-icon" aria-hidden="true">✳</span>
      {children}
    </div>
  );
}
