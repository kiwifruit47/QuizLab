import './Quiz.css';
import { useState, useEffect } from "react";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { Link } from 'react-router-dom';

type Props = {
    apiUrl: string;
}

export const Quiz = ({ apiUrl }: Props) => {
    type ApiQuestion = {
        type: 'multiple' | 'boolean';
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
    };

    const [questions, setQuestions] = useState<ApiQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(apiUrl, {
                cache: 'no-store',
            });
            if(!response.ok) {
                throw new Error('Response was not ok');
            }
            const result = await response.json();
            setQuestions(result.results);
            setCurrentIndex(0);
            setScore(0);
        } catch (error: any) {
            setError('Error fetching data: ' + error.message);
        } finally {
            setLoading(false);
            console.log('Fetching from', apiUrl);
        }  
    }

    useEffect(() => {fetchData()}, [apiUrl]);

    const handleNext = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
          setScore((prev) => prev + 1);
        }
      };
    
      const restartQuiz = () => {
        fetchData();
      };
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (currentIndex >= questions.length) {
        return (
          <div className='quiz_container' id='completed'>
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzh2dHRzYWZkd3psYjBvZXRtY2pheGJocDkyejd2bm5idDE1dms1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vezy5ZDCPSLyEtXfBf/giphy.gif" alt="cat with confetti" />
            <h1>Quiz complete!</h1>
            <p className='score'>Your score: {score} / {questions.length}</p>
            <button id='restart_btn' onClick={restartQuiz} style={{marginBottom: '1em'}}>↻ Restart Quiz</button>
            <span style={{color: '#EDB7ED', marginBottom: '1em'}}>or</span>
            <Link to='/quiz-lab/' style={{color: '#EDB7ED', fontWeight: 'bold'}}>Click here to go to home page</Link>
          </div>
        );
      }
    
      return (
        <div className='quiz_container'>
          <QuestionCard
            {...questions[currentIndex]}
            onNext={handleNext}
            onAnswer={handleAnswer}
          />
          <p className='score'>Score: {score} / {questions.length}</p>
        </div>
      );
}
