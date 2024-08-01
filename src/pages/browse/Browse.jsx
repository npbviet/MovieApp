import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { MovieList } from "./MovieList";
import { Banner } from "./Banner";
import { requests } from "../API/request";

function Browse() {
  const [detailOpen, setDetailOpen] = useState();
  const handleDetailOpen = (category) => {
    setDetailOpen(category);
  };
  return (
    <>
      <NavBar />
      <Banner />
      <MovieList
        onOpen={handleDetailOpen}
        mainCategory={detailOpen}
        category="Original"
        title=""
        url={requests.fetchNetflixOriginals}
      />
      <MovieList
        onOpen={handleDetailOpen}
        mainCategory={detailOpen}
        category="Trending"
        title="Xu hướng"
        url={requests.fetchTrending}
      />
      <MovieList
        onOpen={handleDetailOpen}
        mainCategory={detailOpen}
        category="Rating"
        title="Xếp hạng cao"
        url={requests.fetchTopRated}
      />
      <MovieList
        onOpen={handleDetailOpen}
        mainCategory={detailOpen}
        category="Action"
        title="Hành động"
        url={requests.fetchActionMovies}
      />
      <MovieList
        onOpen={handleDetailOpen}
        mainCategory={detailOpen}
        category="Comedy"
        title="Hài"
        url={requests.fetchComedyMovies}
      />
      <MovieList
        onOpen={handleDetailOpen}
        mainCategory={detailOpen}
        category="Horror"
        title="Kinh dị"
        url={requests.fetchHorrorMovies}
      />
      <MovieList
        onOpen={handleDetailOpen}
        mainCategory={detailOpen}
        category="Romance"
        title="Lãng mạn"
        url={requests.fetchRomanceMovies}
      />
      <MovieList
        onOpen={handleDetailOpen}
        mainCategory={detailOpen}
        category="Documentaries"
        title="Tài liệu"
        url={requests.fetchDocumentaries}
      />
    </>
  );
}

export default Browse;
