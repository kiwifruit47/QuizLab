import './QuestionCard.css';
import { useState, useEffect } from "react";

type QuestionProps = {
    question: string;
    type: "multiple" | "boolean";
    correct_answer: string;
    incorrect_answers: string[];
    onNext: () => void;
    onAnswer: (isCorrect: boolean) => void;
  };
  
  export const QuestionCard: React.FC<QuestionProps> = ({
    question,
    correct_answer,
    incorrect_answers,
    onNext,
    onAnswer,
  }) => {
    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
    useEffect(() => {
      const allAnswers = [...incorrect_answers, correct_answer];
      setShuffledAnswers(shuffleArray(allAnswers));
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, [question]);
  
    const handleAnswerClick = (answer: string) => {
      const correct = answer === correct_answer;
      setSelectedAnswer(answer);
      setIsCorrect(correct);
      onAnswer(correct);
    };
  
    const handleNext = () => {
      onNext();
    };
  
    return (
      <div className="quiz_card">
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div className="options">
          {shuffledAnswers.map((option) => (
            <button
              className='answer_btn'
              key={option}
              onClick={() => handleAnswerClick(option)}
              disabled={selectedAnswer !== null}
              style={{
                background:
                  selectedAnswer === option
                    ? option === correct_answer
                      ? "#9FC87E"
                      : "#FF748B"
                    : "",
              }}
              dangerouslySetInnerHTML={{ __html: option }}
            />
          ))}
        </div>
        {selectedAnswer && (
          <div id='result'>
            <p>
              {isCorrect ? "Correct!" : `Incorrect. Correct answer: ${correct_answer}`}
            </p>
            <button id='next_btn' onClick={handleNext}>Next</button>
          </div>
        )}
      </div>
    );
  };
  
  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }
  