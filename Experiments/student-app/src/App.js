import React from "react";
import Student from "./student";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Details</h1>

      <Student
        name="Tanishk"
        course="Computer Science"
        marks={98}
      />

      <Student
        name="Aman"
        course="Information Technology"
        marks={84}
      />

      <Student
        name="Riya"
        course="Electronics"
        marks={88}
      />
    </div>
  );
}

export default App;