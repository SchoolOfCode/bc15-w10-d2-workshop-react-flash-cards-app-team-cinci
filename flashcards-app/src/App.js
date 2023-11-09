import { useState } from "react";

const flashCardArray = [
  {
    id: "q1",
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation.",
  },
  {
    id: "q2",
    question: "What is a component in react?",
    answer:
      "A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.",
  },
  {
    id: "q3",
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
  },
  {
    id: "q4",
    question: "What are hooks in react?",
    answer:
      "Functions starting with use are called Hooks. useState is a built-in Hook provided by React. Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.",
  },
  {
    id: "q5",
    question: "What Is A Single Page Application?",
    answer:
      "A Single Page Application (SPA) is a web application that is designed to be displayed as a single, static page.",
  },
  {
    id: "q6",
    question: "What is state in React?",
    answer:
      "State of a component is an object that holds some information that may change over the lifetime of the component.",
  },
  {
    id: "q7",
    question: "What is Reactjs?",
    answer:
      "React is a JavaScript library that makes building user interfaces easy. It was developed by Facebook.",
  },
  {
    id: "q8",
    question: "What are some common commands in react?",
    answer:
      "npx create-react-app my-app, cd my-app, npm start and npm run build",
  },
  {
    id: "q9",
    question: "Name two types of React component",
    answer: "Function component and Class component",
  },
  {
    id: "q10",
    question: "What are lifecycle methods in React?",
    answer:
      "React provides a set of lifecycle methods that allow you to hook into different stages of a component's life, such as mounting, updating, and unmounting. These methods can be used to perform actions or handle side effects at specific points in the component's lifecycle.",
  },
];

function App() {
  return (
    <>
      <Header />
      <Form />
      <Flashcards />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <img src="logo192.png" alt="Logo" />
      <h1 style={{ color: "white", fontSize: "50px" }}>React Flashcards</h1>
      <p style={{ color: "white", margin: "0", fontSize: "25px" }}>
        🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌
      </p>
    </header>
  );
}

export function Form() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [NewFlashCard, setNewFlashCard] = useState("");

  function handleQuestionChange(e) {
    setQuestion(e.target.value);
    setNewFlashCard(e.target.value + " " + question);
  }

  function handleAnswerChange(e) {
    setAnswer(e.target.value);
    setNewFlashCard(answer + " " + e.target.value);
  }
  return (
    <form className="formStyle" style={{ backgroundColor: "#232731" }}>
      <label
        style={{ color: "white", columnWidth: "3rem", fontSize: "1.3rem" }}
      >
        Question:
      </label>
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        style={{
          backgroundColor: "#2f323c",
          border: "3px solid #31343e",
          borderRadius: "9px",
          width: "19rem",
          height: "40px",
        }}
      />
      <label
        style={{ color: "white", columnWidth: "3rem", fontSize: "1.3rem" }}
      >
        Answer:
      </label>
      <input
        type="text"
        value={answer}
        onChange={handleAnswerChange}
        style={{
          backgroundColor: "#2f323c",
          border: "3px solid #31343e",
          borderRadius: "9px",
          width: "19rem",
          height: "40px",
        }}
      />
      <button
        onClick={NewFlashCard}
        style={{
          color: "white",
          backgroundColor: "#07B1DF",
          borderRadius: "9px",
          border: "3px solid #07B1DF",
          height: "45px",
          width: "5rem",
          fontSize: "1.1rem",
        }}
      >
        Add
      </button>
    </form>
  );
}

function Flashcards() {
  const [flashCardArray0, setFlashCardArray] = useState(flashCardArray);

  const handleClick = (id) => {
    setFlashCardArray((prevArray) => {
      return prevArray.filter((flashcard) => flashcard.id !== id);
    });
  };
  return (
    <section className="flashcard-grid">
      {flashCardArray0.map(({ id, question }) => {
        return (
          <div
            onClick={() => handleClick(id)}
            style={{
              backgroundColor: "#323949",
              height: "11rem",
              width: "20rem",
              borderRadius: "5px",
              color: "white",
              fontSize: "18px",
              display: "flex" /* Enable flexbox layout */,
              flexDirection: "column" /* Set flex direction to column */,
              justifyContent: "center" /* Center items vertically */,
              alignItems: "center" /* Center items horizontally */,
              padding: "0.5rem",
              margin: "0.5rem",
              paddingTop: "0.1rem",
            }}
            className="flashcard"
            key={id}
          >
            <p
              style={{
                fontSize: "36px",
                marginBottom: "0.2rem",
                marginTop: "0.2rem",
              }}
            >
              🤔
            </p>
            <p style={{ textAlign: "center" }}>{question}</p>
          </div>
        );
      })}
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#16181F", color: "white" }}>
      Built with React <img id="footer-logo" src="logo192.png" alt="Logo" />
    </footer>
  );
}

export default App;
