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
    <header>
      <img src="logo192.png" alt="Logo" />
      <h1 style={{ color: "white" }}>React Flashcards</h1>
      <p style={{ color: "white" }}>
        🧠Expand Your React Knowledge, One Flashcard at a Time!🐌
      </p>
    </header>
  );
}

function Form() {
  return (
    <form style={{ backgroundColor: "#232731" }}>
      <label style={{ color: "white" }}>Question:</label>
      <input type="text" />
      <label style={{ color: "white" }}>Answer:</label>
      <input type="text" />
      <button style={{ color: "white", backgroundColor:"#07B1DF" , borderRadius:"25%"}}>Add</button>
    </form>
  );
}

function Flashcards() {
  return (
    <section>
      {flashCardArray.map(({ id, question }) => {
        return (
          <div style={{backgroundColor:"#323949"}} className="flashcard" key={id}>
            <p>🤔</p>
            <p>{question}</p>
          </div>
        );
      })}
    </section>
  );
}

function Footer() {
  return (
    <footer style={{backgroundColor: "#16181F", color: "white"}}>
      Built with React <img id="footer-logo" src="logo192.png" alt="Logo" />
    </footer>
  );
}

export default App;
