import './App.css';
import BandList from './components/BandList/BandList';
import Heading from './components/Heading/Heading';
import MetalMeta from './components/MetalMeta/MetalMeta';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <BandList />
    </div>
  );
}

export default App;
