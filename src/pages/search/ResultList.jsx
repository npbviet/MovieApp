import React, { useRef } from "react";
import { useEffect, useState } from "react";
import styles from "./ResultList.module.css";
import MovieItem from "../browse/MovieItem";
import MovieDetail from "../browse/MovieDetail";

const ResultList = (props) => {
  //Load dữ liệu movies
  const data = props.movies;
  const [movies, setMovies] = useState();
  useEffect(() => {
    setMovies(data);
    setSelectedMovie(null);
  }, [data]);

  //Ẩn/Hiện thông tin movie
  const [selectedMovie, setSelectedMovie] = useState();
  const toggleMovieInfo = (movie) => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };
  //Scroll đến view hiện tại
  const divRef = useRef();
  const scrollToElement = () => {
    const { current } = divRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section ref={divRef}>
      <div className={styles.titleMVList}>Search Result</div>
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      <div className={styles.containerMVList}>
        {movies && (
          <ul className={styles.movieList}>
            {movies.map((movie, index) => {
              return (
                <div key={index}>
                  <MovieItem
                    onClick={() => {
                      toggleMovieInfo(movie);
                      scrollToElement();
                    }}
                    poster={
                      props.title ? movie.backdrop_path : movie.poster_path
                    }
                    name={movie.name ? movie.name : movie.original_title}
                    title={props.title}
                  />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ResultList;
