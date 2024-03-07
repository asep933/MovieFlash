import { useEffect, useState } from "react";
import { getTopRated } from "../api";

const MovuePopular = () => {
  const [dataTopMovie, setDataTopMovie] = useState([]);

  const top = async () => {
    setDataTopMovie(await getTopRated());
  };

  console.log(dataTopMovie);

  useEffect(() => {
    top();
  }, []);

  return (
    <div className="top-rated">
      <h3 className="title-top-list">Top Rated</h3>

      <div className="container-list-top-rated">
        <div className="list-top-rated">
          {dataTopMovie
            .map((data) => (
              <div key={data.id} className="card-top-rated">
                <div className="overflow-top">
                  <img
                    className="image-top"
                    src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
                    alt={`image ${data.title}`}
                  />
                </div>
                <h4 className="title-top">{data.title}</h4>
                <span className="rate">{data.vote_average}</span>
              </div>
            ))
            .slice(0, 6)}
        </div>
      </div>
    </div>
  );
};

export default MovuePopular;
