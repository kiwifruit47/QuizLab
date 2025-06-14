import './HomePage.css';
import LandingPageHero from '../../components/LandingPageHero/LandingPageHero';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Logo from '../../assets/QuizLab.png';
import ClapperBoard from '../../assets/clapperboard.png';
import Globe from '../../assets/globe.png';
import Book from '../../assets/open-book.png';
import Painting from '../../assets/painting.png';
import Parthenon from '../../assets/parthenon.png';
import Vynil from '../../assets/vinyl.png';

function HomePage() {
    type Category = {
        name: string,
        image: string,
        alternativeText: string
      }
    
      const music: Category = {
        name: "Music",
        image: Vynil,
        alternativeText: "vinyl icon"
      }
    
      const art: Category = {
        name: "Art",
        image: Painting,
        alternativeText: "painting icon"
      }
    
      const literature: Category = {
        name: "Literature",
        image: Book,
        alternativeText: "book icon"
      }
    
      const history: Category = {
        name: "History",
        image: Parthenon,
        alternativeText: "parthenon icon"
      }
    
      const geography: Category = {
        name: "Geography",
        image: Globe,
        alternativeText: "globe icon"
      }
    
      const movies: Category = {
        name: "Movies",
        image: ClapperBoard,
        alternativeText: "clapperboard icon"
      }
    
    
      const categories: Category[] = [];
      categories.push(music, art, literature, history, geography, movies);

      return (
        <>
            <Link to='/quiz-lab/'><img src={Logo} alt="logo" /></Link>
            <LandingPageHero />
            <h2>Choose a category</h2>
            <div className='category_container'>
                {categories.map((category) => (
                  <Link to={'/quiz-lab/' + category.name.toLowerCase()}>
                    <div key={category.name} className={category.name.toLowerCase()}>
                      <img src={category.image} alt={category.alternativeText}/>
                      <span>{category.name}</span>
                    </div>
                  </Link>
                
                ))}
            </div>
            <Footer/>
        </>
      );
}

export default HomePage;