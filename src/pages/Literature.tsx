import { Link } from 'react-router-dom'
import { Quiz } from '../components/Quiz/Quiz'

export const Literature = () => {
  return (
    <>
      <Link to='/quiz-lab/'><img src="src/assets/QuizLab.png" alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=10&difficulty=easy"}></Quiz>
    </>
  )
}
