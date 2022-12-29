import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";
import "./App.css";
import Nav from "./Nav";
import TitleAndRequest from "./titleAndRequest";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      {TitleAndRequest.map((data) => {
        return <Row title={data.title} fetchUrl={data.fetchUrl} />;
      })}
      {/*      
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}
export default App;
