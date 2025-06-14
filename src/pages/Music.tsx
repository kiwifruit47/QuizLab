import { Quiz } from '../components/Quiz/Quiz'
import { Link } from 'react-router-dom'
import Logo from '../assets/QuizLab.png';

export const Music = () => {
  return (
    <>
      <Link to='/quiz-lab/'><img src={Logo} alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=12&difficulty=easy"}></Quiz>
    </>
  )
}
