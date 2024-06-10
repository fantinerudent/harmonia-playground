import { useState } from "react";

function Form() {
  const [student, setStudent] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const [messageToDisplay, setMessageToDisplay] = useState("");

  const insertStudentIntoDatabase = async (stud) => {
    try {
      const response = await fetch("http://localhost:3310/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stud),
      });

      const result = await response.json();
      setMessageToDisplay(result);
      setTimeout(() => {
        setStudent({
          lastname: "",
          firstname: "",
          email: "",
          password: "",
        });
        setMessageToDisplay("");
      }, 5000);
    } catch (error) {
      setMessageToDisplay(error);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    insertStudentIntoDatabase(student);
  };

  return (
    <div id="feedback-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="last name"
          value={student.lastname}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="firstname"
          value={student.firstname}
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={student.email}
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={student.password}
          onChange={handleOnChange}
        />
        <button type="submit"> send</button>
        {messageToDisplay ? <div> {messageToDisplay}</div> : ""}
      </form>
    </div>
  );
}

export default Form;
