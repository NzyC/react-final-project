import React from "react";
import "./Home.css";
import Row from "../components/Row";
import requests from "../Requests";

export default function Home({ currentMovie, setCurrentMovie}) {

  console.log(currentMovie);

  return (
    <div className="home">
        <Row
          currentMovie={setCurrentMovie}
          title="Trending Now"
          fetchUrl={requests.fetchtrending}
        />
        <Row
          currentMovie={setCurrentMovie}
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
        />
        <Row
          currentMovie={setCurrentMovie}
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row
          currentMovie={setCurrentMovie}
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row
          currentMovie={setCurrentMovie}
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row
          currentMovie={setCurrentMovie}
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row
          currentMovie={setCurrentMovie}
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
    </div>
  );
}
