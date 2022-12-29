import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";
import "./App.css";
import Nav from "./Nav";
import TitleAndRequest from "./titleAndRequest";
function App() {
  //nice 
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
      
    </div>
  );
}
export default App;
