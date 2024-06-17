import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Result from './Results';
import { Container, Header ,Button} from './Styles';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/quizData.json');
                setQuestions(response.data.questions);
            } catch (error) {
                console.error('Error fetching quiz questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleAnswerSelection = (questionId, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const handleSubmitAnswer = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleRestart = () => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setShowResult(false);
    };

    const currentQuestion = questions[currentQuestionIndex];

    if (showResult) {
        return (
            <Container>
                <Result questions={questions} answers={answers} onRestart={handleRestart} />
            </Container>
        );
    }

    return (
        <Container>
            {currentQuestion ? (
                <>
                    <Header>Question {currentQuestionIndex + 1} / {questions.length}</Header>
                    <Question
                        key={currentQuestion.id}
                        question={currentQuestion}
                        onAnswerSelection={handleAnswerSelection}
                        selectedAnswer={answers[currentQuestion.id]}
                    />
                    <div>
                        {currentQuestionIndex > 0 && (
                            <Button onClick={handlePreviousQuestion}>Previous</Button>
                        )}
                        <Button onClick={handleSubmitAnswer}>
                            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </div>
                </>
            ) : (
                <p>Loading questions...</p>
            )}
        </Container>
    );
};

export default Quiz;
