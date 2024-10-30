import logo from './logo.svg';
import './App.css';
import list from './Components/list';

const titleList = list.list.map((item) => {
  return <p>Sith Lord {item}</p>
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>
            First apprentice was {titleList[0]}
          </li>
          <li>
            Second apprentice was {titleList[1]}
          </li>
          <li>
            Third apprentice was {titleList[2]}
          </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
