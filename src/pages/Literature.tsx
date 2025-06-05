import React from 'react'
import { Question } from '../components/Question/Question'

export const Literature = () => {
  return (
    <Question apiUrl = {"https://opentdb.com/api.php?amount=5&category=10&difficulty=easy"}></Question>
  )
}
