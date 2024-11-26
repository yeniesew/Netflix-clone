import React from "react";
import requests from "../../../utils/requests";
import Row from "../Row/Row";

function Rowlist() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRateMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumenraries} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Adviture Movies" fetchUrl={requests.fetchAdvintureMovies} />
    </>
  );
}

export default Rowlist;