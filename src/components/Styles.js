import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const Header = styled.h2`
    font-size: 1.5em;
    color: #ff9800;
`;

export const QuestionContainer = styled.div`
    margin: 20px 0;
`;

export const QuestionText = styled.p`
    font-size: 1.2em;
`;

export const Option = styled.div`
    margin: 10px 0;
`;

export const OptionButton = styled.button`
    background-color: ${props => (props.isSelected ? '#673ab7' : '#ffffff')};
    color: ${props => (props.isSelected ? '#ffffff' : '#000000')};
    border: 1px solid #673ab7;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: #9575cd;
        color: #ffffff;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 4px;
    background-color: #673ab7;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: #9575cd;
    }
`;
// export const RadioButton = styled.input`
//     padding: 10px 20px;
//     margin: 10px;
//     border: none;
//     border-radius: 4px;
//     background-color: #673ab7;
//     color: #ffffff;
//     cursor: pointer;
//     transition: background-color 0.2s;
//     &:hover {
//         background-color: #9575cd;
//     }
// `;

export const ResultContainer = styled.div`
    text-align: left;
`;

export const AnswerList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const AnswerItem = styled.li`
    margin: 5px 0;
`;
