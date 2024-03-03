import { useEffect, useState } from "react";
import "./App.css";
import MoviePopular from "./components/MovuePopular";
import { getPopular } from "./api/index";

function App() {
  const [popular, setPopular] = useState([]);

  const res = async () => setPopular(await getPopular());

  useEffect(() => {
    res();
  }, []);

  console.log(popular);

  return (
    <div className="container">
      <header className="container">
        <div className="title-container">
          <h1 className="title">MovieFlash</h1>
          <input className="input" placeholder="search movie..." type="text" />
        </div>

        <h3 className="title-category">Popular</h3>

        <div className="warp">
          {popular.map((data) => (
            <div key={data.length}>
              <MoviePopular
                poster_path={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
                title={data.title}
                vote_average={data.vote_average}
              />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
