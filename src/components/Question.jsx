import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
export default function Question({
  questionText,
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
  onSkipAnswer,
}) {
  return (
    <div id="questions">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        selectedAnswer={selectedAnswer}
        answers={answers}
        onSelectAnswer={onSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
