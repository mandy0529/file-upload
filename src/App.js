import './App.css';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      <Title />
      <Upload />
      <ImageGrid />
    </div>
  );
}

export default App;
