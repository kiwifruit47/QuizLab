import { Quiz } from '../components/Quiz/Quiz'
import { Link } from 'react-router-dom'

export const Music = () => {
  return (
    <>
      <Link to='/'><img src="src/assets/QuizLab.png" alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=12&difficulty=easy"}></Quiz>
    </>
  )
}
