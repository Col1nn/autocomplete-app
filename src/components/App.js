import AutoComplete from './AutoComplete';
import Countries from './Countries';
import Movies from './Movies';
import '../styles/App.css';
function App() {
  return (
    <>
      <h1 className='nameOfApp'>Autocomplete - APP</h1>
      <div className='autocomplete-inputs'>
        <p>Search Countries</p>
        <AutoComplete data={Countries} />
        <br />
        <p>Search Movies</p>
        <AutoComplete data={Movies} />
      </div>
    </>
  );
}

export default App;
