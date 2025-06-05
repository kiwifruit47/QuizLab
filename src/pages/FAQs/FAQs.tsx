import './FAQs.css';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export const FAQs = () => {
  const stongTagStyle = {
      fontSize: '1.5em', 
  }
  const paragraphStyle = {
    color: '#FF9843',
    fontSize: '1em'
  }
  return (
    <>
    <Link to='/'><img src="src/assets/QuizLab.png" alt="logo" /></Link>
    <div className='faq_container'>
      <h1>FAQs</h1>
      <div className='faq_item'>
        <strong style={stongTagStyle}>What is QuizLab?</strong>
        <p style={paragraphStyle}>QuizLab is an interactive quiz platform built as part of an educational project to explore modern web development, user experience design, and data integration with public APIs.</p>
      </div>
      <br />
      <div className='faq_item'>
        <strong style={stongTagStyle}>Do I need to create an account to play?</strong>
        <p style={paragraphStyle}>No account is needed! You can jump straight into any quiz without signing up.</p>
      </div>
      <br />
      <div className='faq_item'>
        <strong style={stongTagStyle}>Can I retake a quiz?</strong>
        <p style={paragraphStyle}>Yes! You can restart any quiz by clicking the "Restart Quiz" button at the end.</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

