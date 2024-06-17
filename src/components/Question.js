import React from 'react';
import { QuestionContainer, QuestionText, Option, OptionButton } from './Styles';

const Question = ({ question, onAnswerSelection, selectedAnswer }) => {
    return (
        <QuestionContainer>
            <QuestionText>{question.text}</QuestionText>
            {question.options.map(option => (
                <Option key={option}>
                    <OptionButton
                        onClick={() => onAnswerSelection(question.id, option)}
                        isSelected={selectedAnswer === option}
                    >
                        {option}
                    </OptionButton>
                </Option>
            ))}
        </QuestionContainer>
    );
};

export default Question;
