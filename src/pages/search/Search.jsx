import React, { useEffect, useState } from "react";
import { NavBar } from "../browse/NavBar";
import { fetchApi, requests } from "../API/request";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  //
  const urlSearch = `${requests.fetchSearch}&query=${searchQuery}`;
  // console.log(urlSearch);
  useEffect(() => {
    fetchApi(urlSearch).then((data) => setMovies(data.results));
  }, [searchQuery]);
  // console.log(movies);

  const handleSearchSubmit = (query) => {
    console.log(query);
    setSearchQuery(query);
  };
  return (
    <div>
      <NavBar />
      <SearchForm onSubmit={handleSearchSubmit} />
      <ResultList movies={movies} />
    </div>
  );
};

export default Search;
