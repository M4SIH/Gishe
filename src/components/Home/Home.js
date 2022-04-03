import { getMovies } from "../../services/FakeMovieService";
import Carousel from "../../shared/Carousel";

const Home = () => {
  const movies = getMovies();
  return <Carousel url={"movie"} isNeedButton={true} items={movies} />;
};

export default Home;
