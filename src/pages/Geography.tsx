import React from 'react'
import { Quiz } from '../components/Quiz/Quiz'
import { Link } from 'react-router-dom'

export const Geography = () => {
  return (
    <>
      <Link to='/'><img src="src/assets/QuizLab.png" alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=22&difficulty=easy"}></Quiz>
    </>
  )
}
