import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import Questions from "../Questions";
export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: Questions[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="questions">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{Questions[index].text}</h2>
      <Answers
        selectedAnswer={answer.selectedAnswer}
        answers={Questions[index].answers}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
