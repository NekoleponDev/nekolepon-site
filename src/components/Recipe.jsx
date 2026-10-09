const principles = [
  ["01", "Curiosity", "ASK THE ODD QUESTIONS."],
  ["02", "Craft", "CARE ABOUT THE DETAILS."],
  ["03", "Heart", "MAKE IT MEAN SOMETHING."]
];

export default function Recipe() {
  return (
    <aside className="about-aside">
      <span>OUR RECIPE</span>
      {principles.map(([number, title, description]) => (
        <div className="recipe-item" key={number}>
          <b>{number}</b>
          <span>
            {title}
            <small>{description}</small>
          </span>
        </div>
      ))}
      <div className="aside-doodle" aria-hidden="true">
        n × k
        <span>≋</span>
      </div>
    </aside>
  );
}
