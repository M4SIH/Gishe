import { getMovies } from "../../services/FakeMovieService";
import Carousel from "../../shared/Carousel";

const Home = () => {
  const movies = getMovies();
  return <Carousel movies={movies} />;
};

export default Home;
