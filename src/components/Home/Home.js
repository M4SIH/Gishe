import Carousel from "../../shared/Carousel";
import { getMovies } from "./../../services/FakeMovieService";

const Home = () => {
  const movies = getMovies();

  return <Carousel size="3" url={"movie"} isNeedButton={true} items={movies} />;
};

export default Home;
