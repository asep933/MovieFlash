import { useEffect, useState } from "react";
import "./App.css";
import { getByQuery, getPopular } from "./api/index";
import PopularList from "./components/PopularList";

function App() {
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

  const handleClick = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="container">
      <div className="title-container">
        <h1 className="title">MovieFlash</h1>
        <input
          onChange={(e) => handleClick(e)}
          className="input"
          placeholder="search movie..."
          type="text"
        />
      </div>

      <PopularList popular={popular} dataSearch={dataSearch} />
    </header>
  );
}

export default App;
