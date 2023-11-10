import { useState } from "react";

export default function Form(props) {
  // when add button is clicked:
  //  call the function for adding a new flashcard
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // create a function for handling the submit event
  function handleSubmit(event) {
    //Prevent the page for reloading
    event.preventDefault();

    // create a new flashcard object (based on the user input)
    // call the function for adding a new flashcard pbject

    props.addFlashcard({
      question,
      answer,
    });

    setQuestion("");
    setAnswer("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="formStyle"
      style={{ backgroundColor: "#232731" }}
    >
      <label
        style={{ color: "white", columnWidth: "3rem", fontSize: "1.3rem" }}
      >
        Question:
      </label>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
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
        onChange={(e) => setAnswer(e.target.value)}
        style={{
          backgroundColor: "#2f323c",
          border: "3px solid #31343e",
          borderRadius: "9px",
          width: "19rem",
          height: "40px",
        }}
      />
      <button
        onClick={handleSubmit}
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
