import YouTube from "react-youtube";
import { API_KEY, fetchApi } from "../API/request";
import styles from "./MovieDetail.module.css";
import { useEffect, useState } from "react";

function MovieDetail(props) {
  //fetch Dữ liệu
  const urlFetchMovie = `/movie/${props.movie.id}/videos?api_key=${API_KEY}`;
  const [infoMovie, setInfoMovie] = useState();
  useEffect(() => {
    fetchApi(urlFetchMovie).then((data) => {
      setInfoMovie("");
      //Lấy videoKey
      let key;
      for (const video of data.results) {
        if (video.type == "Trailer") {
          key = video.key;
          break;
        }
        if (key == null && video.type == "Teaser") {
          key = video.key;
        }
      }
      setInfoMovie(key);
    });
  }, [props]);

  //Thay đổi định dạng ngày
  const dateMovie = new Date(`${props.movie.release_date}`);

  const month = dateMovie.toLocaleString("en-US", { month: "short" });
  const day = dateMovie.toLocaleString("en-US", { day: "2-digit" });
  const year = dateMovie.getFullYear();

  //Style video youtube
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  //Thay video lỗi bằng hình ảnh
  const replaceVideoErr = () => {
    setInfoMovie(null);
  };
  console.log(infoMovie);
  return (
    <div className={styles.container}>
      <div className={styles.movieDetail}>
        <h1>
          {props.movie.name ? props.movie.name : props.movie.original_title}
        </h1>
        <div className={styles.subText}>
          Release Date:{" "}
          {day == "Invalid Date"
            ? "Release date has not been determined"
            : `${month} ${day} ${year}`}
          <br />
          Vote: {props.movie.vote_average}/10
        </div>
        <p>{props.movie.overview}</p>
      </div>
      {!infoMovie ? (
        <img
          src={`http://image.tmdb.org/t/p/original${
            props.movie[`backdrop_path`]
          }`}
        /> //Thay thế ảnh khi không có link Youtube
      ) : (
        <YouTube
          onError={replaceVideoErr}
          key={infoMovie}
          videoId={infoMovie}
          opts={opts}
        />
      )}
    </div>
  );
}

export default MovieDetail;
