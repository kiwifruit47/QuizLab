import { Link } from 'react-router-dom'
import { Quiz } from '../components/Quiz/Quiz'

export const History = () => {
  return (
    <>
      <Link to='/'><img src="src/assets/QuizLab.png" alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=23&difficulty=easy"}></Quiz>
    </>
  )
}
