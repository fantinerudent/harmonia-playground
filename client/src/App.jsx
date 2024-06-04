import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reponse = await fetch("http://localhost:3310/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      const resultat = await reponse.json();
      console.info("Réussite :", resultat);
    } catch (erreur) {
      console.error("Erreur :", erreur);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main>
      <div id="feedback-form">
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="last name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="firstname"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button type="submit"> send</button>
        </form>
      </div>
    </main>
  );
}

export default App;
