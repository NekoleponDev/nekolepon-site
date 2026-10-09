const games = [
  {
    slug: "hening",
    name: "Hening",
    status: "IN DEVELOPMENT",
    platform: "PLATFORM TBA",
    genre: ["NARRATIVE", "PSYCHOLOGICAL", "EXPLORATION"],
    description:
      "A psychological narrative game about grief, memory, and the quiet spaces that hold us together. Some stories don't end when the credits roll.",
    shortDescription:
      "A quiet story about grief, memory, and the things we leave behind.",
    tagline: "A story still taking shape.",
    featured: true,
    artwork: "window"
  }
];

export default games;

export function getGameBySlug(slug) {
  return games.find((game) => game.slug === slug);
}

export function getFeaturedGames() {
  return games.filter((game) => game.featured);
}
