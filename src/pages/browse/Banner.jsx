import React, { useEffect, useState } from "react";
import { fetchApi, requests } from "../API/request";
import styles from "./Banner.module.css";

export function Banner() {
  //Lấy thông tin banner
  const [banner, setBanner] = useState("");
  useEffect(() => {
    fetchApi(requests.fetchNetflixOriginals).then((data) => {
      let a = Math.floor(Math.random() * data.results.length);
      setBanner(data.results[a]);
    });
  }, []);
  const bannerUrl = `http://image.tmdb.org/t/p/original${
    banner[`backdrop_path`]
  }`;
  //Thiết lập style ảnh nền
  const backGroundStyle = {
    backgroundImage: banner
      ? `linear-gradient(0deg,rgba(44, 7, 5, 0.6) 0%,rgba(44, 7, 5, 0) 100%), url(${bannerUrl})`
      : //linear-gradient(to top rgba(0,0,0,0.8), rgba(255,255,255,0))
        "none",
    backgroundSize: "cover",
    backgroundPosition: "top",
    width: "95.8%",
    height: "30rem",
  };
  return (
    <div className={styles.banner} style={backGroundStyle}>
      {banner && (
        <div className={styles.container}>
          <h1>{banner.name || banner.original_title}</h1>
          <div className={styles.control}>
            <button>Play</button>
            <button>My list</button>
          </div>
          <p>{banner.overview}</p>
        </div>
      )}
      {/* {!banner && (
        <div className={styles.reload}>
          You click too fast. Please F5 to reload
        </div>
      )} */}
    </div>
  );
}
