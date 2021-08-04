import './App.css';
import SearchBar from './../components/search-bar'
import Table from './../components/table'

function App() {
  return (
    <div className="App">
      <div className="searchbar">
      <SearchBar />
      </div>
      <div className='container_table'>
        <h1>Koinbanx búsquedas</h1>
        <Table />
      </div>
    </div>
  );
}

export default App;
