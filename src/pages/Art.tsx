
import { Link } from 'react-router-dom'
import { Quiz } from '../components/Quiz/Quiz'

export const Art = () => {
  return (
    <>
      <Link to='/quizlab/'><img src="src/assets/QuizLab.png" alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=25&difficulty=easy"}></Quiz>
    </>
  )
}


