import { createContext, useState, useEffect } from "react";
import axios from "axios";
import StarshipService from "../services/StarshipsService";

const base_url = process.env.REACT_APP_BASE_URL;
export const StarshipsContext = createContext();

export const StarshipsProvider = (props) => {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const starshipService = new StarshipService();

  useEffect(() => {
    axios.get(`${base_url}/starships/`).then(({ data }) => {
      setStarships(data.results);
      setNextPage(data.next);
    });
  }, []);

  const handleLoadMoreClick = () => {
    setLoading(true);
    starshipService
      .getAllStarshipsByPage(nextPage)
      .then(({ data }) => {
        setStarships((prev) => [...prev, ...data.results]);
        setNextPage(data.next);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <StarshipsContext.Provider
      value={{
        starships,
        setStarships,
        nextPage,
        setNextPage,
        search,
        setSearch,
        handleLoadMoreClick,
        loading,
      }}
    >
      {props.children}
    </StarshipsContext.Provider>
  );
};
