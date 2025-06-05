import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Quiz } from '../components/Quiz/Quiz'

export const Literature = () => {
  return (
    <>
      <Link to='/'><img src="src/assets/QuizLab.png" alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=10&difficulty=easy"}></Quiz>
    </>
  )
}
