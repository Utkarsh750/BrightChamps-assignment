export const jsQuizz = {
    questions: [
      {
        question:
          "Which of the following is used in React.js to increase performance?",
        choices: [
          "Virtual DOM",
          "Original DOM",
          "Both A and B",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Virtual DOM",
      },
      {
        question: "What is ReactJS?",
        choices: [
          "Server-side framework",
          "User Interface framework",
          "both a and b",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "User Interface framework",
      },
      {
        question:
          "Identify the one which is used to pass data to components from outside",
        choices: ["Render with arguments", "setState", "PropTypes", "props"],
        type: "MCQs",
        correctAnswer: "props",
      },
      {
        question: "In which language is React.js written?",
        choices: ["Python", "Java", "C#", "JavaScript"],
        type: "MCQs",
        correctAnswer: "JavaScript",
      },
      {
        question: "What is Babel?",
        choices: [
          "JavaScript interpreter",
          "JavaScript transpiler",
          "JavaScript compiler",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "JavaScript compiler",
      },
      // New questions added
      {
        question: "What is the purpose of the useState hook in React?",
        choices: [
          "To handle side effects",
          "To manage state in a functional component",
          "To render components",
          "To handle props",
        ],
        type: "MCQs",
        correctAnswer: "To manage state in a functional component",
      },
      {
        question: "What does JSX stand for?",
        choices: [
          "JavaScript XML",
          "JavaScript Extra",
          "Java Syntax Extension",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "JavaScript XML",
      },
      {
        question: "Which hook is used for lifecycle methods in React functional components?",
        choices: ["useEffect", "useState", "useContext", "useRef"],
        type: "MCQs",
        correctAnswer: "useEffect",
      },
      {
        question: "How can you prevent a component from re-rendering in React?",
        choices: [
          "By using PureComponent",
          "By using shouldComponentUpdate",
          "By using React.memo",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: "Which of the following is true about React keys?",
        choices: [
          "Keys should be unique among siblings",
          "Keys should not change over time",
          "Keys help identify which items have changed",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: "What is the use of the useRef hook in React?",
        choices: [
          "To refer to DOM elements directly",
          "To manage the lifecycle of components",
          "To trigger a re-render",
          "To update state",
        ],
        type: "MCQs",
        correctAnswer: "To refer to DOM elements directly",
      },
    ],
  };
  

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
