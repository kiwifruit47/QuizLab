import { Link } from 'react-router-dom'
import { Quiz } from '../components/Quiz/Quiz'
import Logo from '../assets/QuizLab.png';

export const History = () => {
  return (
    <>
      <Link to='/quiz-lab/'><img src={Logo} alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=23&difficulty=easy"}></Quiz>
    </>
  )
}
