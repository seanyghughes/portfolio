import ProfilePic from './Profile-Pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Site Currently Under Redevelopment
        </p>
        <img src={ProfilePic} className="ProfilePic" alt="ProfilePic" />
        <p>
          Sean Hughes | Data Analytics 
        </p>

      </header>
    </div>
  );
}

export default App;
