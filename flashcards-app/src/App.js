import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
// import { useState } from "react";
// import "./App.css";

// // React: Building UIs

// // Component:
// //    - Reusable piece of the UI
// //    - Functions starts with a capital letter
// //    - Return some JSX (or anything that React can render)

// // JSX: Language for expressing UIs

// // Props:
// //    Input to a component
// //    Passed from parent to child in key={value} pairs
// //    Child can then extract them from the props object.

// // State:
// //    React variable -> Remember / keeping track of things
// //    "reactive" -> when you change the information, the UI updates (to keep in sync with the new changes)

// // useState:
// //    helpful for creating state
// //    returns an array contains 2 things:
// //      current value of that reactive variable
// //      a way to change that reactive variable

// function App() {
//   // create some state to keep track of the count
//   // 'reactive'
//   // destructuring arrays in JS
//   // destructuring assignments
//   const [count, setCount] = useState(0);

//   console.log("App has rendered");

//   function incrementCount() {
//     // changing state triggers a rerender
//     // rerender -> React will call the component function
//     setCount(prev => prev + 1);
//   }

//   // Change the count when a button is clicked
//   //    Create a button
//   //    Event listener on the button
//   //    when the button is clicked, increment the value
//   //    Can skip with React: Update the DOM manually to reflect the incremented value

//   return (
//     <main>
//       <button onClick={incrementCount}>Click me to increment</button>
//       {count}
//     </main>
//   );
// }

// export default App;
export const flashCardArray = [
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
  const [flashcardObjects, setflashcardObjects] = useState(flashCardArray);

  function deleteFlashcardObjectById(idToDelete) {
    setflashcardObjects((prev) => {
      return prev.filter((obj) => obj.id !== idToDelete);
    });
  }
  function addFlashcardObject(flashcardObject) {
    setflashcardObjects((prev) => {
      const created = {
        id: window.crypto.randomUUID(),
        question: flashcardObject.question,
        answer: flashcardObject.answer,
      };
      const appended = prev.concat(created);
      return appended;
    });
  }

  return (
    <>
      <Header />
      <Form addFlashcard={addFlashcardObject} />
      <Flashcards
        flashcardList={flashcardObjects}
        deleteFlashcard={deleteFlashcardObjectById}
      />
      <Footer />
    </>
  );
}

export default App;
