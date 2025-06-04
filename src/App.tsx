import './App.css';
import LandingPageHero from "./components/LandingPageHero/LandingPageHero";

function App() {
  return(
    <>
      <img className='logo' src="src/assets/QuizLab.png" alt="logo" />
      <LandingPageHero />
      <h2>Choose a category</h2>
      <div className='category_container'>
          <div className='music'>
            <img src="src/assets/vinyl.png" alt="vinyl icon" />
            <span>Music</span>
          </div>
          <div className='art'>
            <img src="src/assets/painting.png" alt="palette icon" />
            <span>Art</span>
          </div>
          <div className='lit'>
            <img src="src/assets/open-book.png" alt="book icon" />
            <span>Literature</span>
          </div>
          <div className='history'>
            <img src="src/assets/parthenon.png" alt="parthenon icon" />
            <span>History</span>
          </div>
          <div className='geography'>
            <img src="src/assets/globe.png" alt="globe icon" />
            <span>Geography</span>
          </div>
          <div className='movies'>
            <img src="src/assets/clapperboard.png" alt="clapperboard icon" />
            <span>Movies</span>
          </div>
      </div>
    </>
  );
}
export default App;