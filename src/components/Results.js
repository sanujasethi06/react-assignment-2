import React from 'react';
import { ResultContainer, AnswerList, AnswerItem, Button, Header } from './Styles';

const Result = ({ questions, answers, onRestart }) => {
    const score = questions.reduce((acc, question) => {
        if (answers[question.id] === question.correctAnswer) {
            return acc + 1;
        }
        return acc;
    }, 0);

    return (
        <ResultContainer>
            <Header>Your Score: {score} / {questions.length}</Header>
            <h3>Your Submitted Answers:</h3>
            <AnswerList>
                {questions.map(question => (
                    <AnswerItem key={question.id}>
                        QuestionId: {question.id} Selected Option: {answers[question.id] || 'Not Answered'}
                    </AnswerItem>
                ))}
            </AnswerList>
            <h3>Correct Answers:</h3>
            <AnswerList>
                {questions.map(question => (
                    <AnswerItem key={question.id}>
                        QuestionId: {question.id} Correct Option: {question.correctAnswer}
                    </AnswerItem>
                ))}
            </AnswerList>
            <Button onClick={onRestart}>Restart Quiz</Button>
        </ResultContainer>
    );
};

export default Result;
