import { useEffect, useState } from "react";
import "./App.css";
import { getByQuery, getPopular } from "./api/index";
import PopularList from "./components/PopularList";
import Navbar from "./components/Navbar";
import TopRated from "./components/TopRated";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [query, setQuery] = useState("");

  const resPopular = async () => setPopular(await getPopular());
  const resQuery = async () => setDataSearch(await getByQuery(query));

  useEffect(() => {
    resPopular();
  }, []);

  useEffect(() => {
    resQuery();
  }, [query]);

  return (
    <>
      <header className="container">
        <div className="hero">
          <Navbar setQuery={setQuery} />

          <PopularList popular={popular} dataSearch={dataSearch} />
        </div>
      </header>

      <section id="top-rated" className="container-pageTwo">
        <TopRated />
      </section>
    </>
  );
};

export default App;
