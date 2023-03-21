import logo from './logo.svg';
import './App.css';
import userlist from './user.json'
import movielist from './movie.json'
function App() {
  localStorage.setItem("listuser",JSON.stringify(userlist))
  localStorage.setItem("listmovie",JSON.stringify(movielist))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
