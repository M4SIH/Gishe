const movies = [
  {
    id: 1,
    title: "The power of dog",
    genre: "Western",
    rate: 8.4,
    src: require("../assets/images/ThePowerOfDog.jpg"),
  },
  {
    id: 2,
    title: "Coda",
    genre: "Comedy",
    rate: 8.1,
    src: require("../assets/images/Coda.jpg"),
  },
  {
    id: 3,
    title: "Dune",
    genre: "Action",
    rate: 8.4,
    src: require("../assets/images/Dune.jpg"),
  },
];
export function getMovies() {
  return movies;
}
