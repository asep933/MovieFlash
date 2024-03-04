import MoviePopular from "./MovuePopular";

const PopularList = ({ popular, dataSearch }) => {
  return (
    <>
      <h3 className="title-category">Popular Movie</h3>

      <div className="warp">
        {dataSearch.length === 0
          ? popular.map((data) => (
              <div key={data.id}>
                <MoviePopular
                  poster_path={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
                  title={data.title}
                  vote_average={data.vote_average}
                />
              </div>
            ))
          : dataSearch.map((data) => (
              <div key={data.id}>
                <MoviePopular
                  poster_path={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
                  title={data.title}
                  vote_average={data.vote_average}
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default PopularList;
