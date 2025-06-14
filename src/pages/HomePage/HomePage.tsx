import './HomePage.css';
import LandingPageHero from '../../components/LandingPageHero/LandingPageHero';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Logo from '../../assets/QuizLab.png';

function HomePage() {
    type Category = {
        name: string,
        imageLink: string,
        alternativeText: string
      }
    
      const music: Category = {
        name: "Music",
        imageLink: "src/assets/vinyl.png",
        alternativeText: "vinyl icon"
      }
    
      const art: Category = {
        name: "Art",
        imageLink: "src/assets/painting.png",
        alternativeText: "painting icon"
      }
    
      const literature: Category = {
        name: "Literature",
        imageLink: "src/assets/open-book.png",
        alternativeText: "book icon"
      }
    
      const history: Category = {
        name: "History",
        imageLink: "src/assets/parthenon.png",
        alternativeText: "parthenon icon"
      }
    
      const geography: Category = {
        name: "Geography",
        imageLink: "src/assets/globe.png",
        alternativeText: "globe icon"
      }
    
      const movies: Category = {
        name: "Movies",
        imageLink: "src/assets/clapperboard.png",
        alternativeText: "clapperboard icon"
      }
    
    
      const categories: Category[] = [];
      categories.push(music, art, literature, history, geography, movies);

      return (
        <>
            <Link to='/'><img src={Logo} alt="logo" /></Link>
            <LandingPageHero />
            <h2>Choose a category</h2>
            <div className='category_container'>
                {categories.map((category) => (
                  <Link to={'/' + category.name.toLowerCase()}>
                    <div key={category.name} className={category.name.toLowerCase()}>
                      <img src={category.imageLink} alt={category.alternativeText}/>
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