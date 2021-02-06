import './App.css';
import {Row} from './components'
import request from './components/requests'
function App() {
  return (
    <div className="app">
      <Row title='Netflix Originals' 
      fetchUrl={request.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Crime" fetchUrl={request.fetchCrime} />
      <Row title="Adventure" fetchUrl={request.fetchAdventureMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={request.fetchTvShows} />
    </div>
  );
}

export default App;
