import requests from "./Request";
let data = [
  { title: "Trending Now", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRatedMovies },
  { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
  { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
  { title: "Horrer Movies", fetchUrl: requests.fetchHorrorMovies },
  { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
  { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
];
export default data;
