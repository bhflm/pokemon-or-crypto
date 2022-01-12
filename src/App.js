import './App.css';
import Answers from './components/Answers';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <div className="title">
          <h1 className="title-text">Crypto or Pokemon?</h1>
        </div>
        <div className="home">
          <Question />
          <Answers />
        </div>
        <div className="bottom-bar">
        <p className="bottom-bar-text">
        Made by <a className="bottom-bar-link" href="https://twitter.com/germibh/">grmi.eth</a>, 
        inspired by <a className="bottom-bar-link" href="https://pixelastic.github.io/pokemonorbigdata/">this idea</a>.
        </p>
        </div>
      </div>
    </div>
  );
}

export default App;
