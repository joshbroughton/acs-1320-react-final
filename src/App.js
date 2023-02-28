import { useState } from 'react';
import './App.css';
import BandList from './components/BandList/BandList';
import Heading from './components/Heading/Heading';
import MetalMeta from './components/MetalMeta/MetalMeta';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <Heading />
      <MetalMeta query={query} setQuery={setQuery}/>
      <BandList query={query}/>
    </div>
  );
}

export default App;
