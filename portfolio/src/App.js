import ProfilePic from './Profile-Pic.jpg';
import './App.css';
import Header from './components/Header.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='NavBar'>
      <Header /> {/* Include the Header component */}
      </div>
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
