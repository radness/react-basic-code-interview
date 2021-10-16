import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

// https://randonuser.me/api

const fetchRandomData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => {
      console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUserDataJSON(randomData);
    });
  }, []);

  return (
    <div className="App">
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increase counter
      </button>
      <button onClick={fetchRandomData}>Fetch Random Data</button>

      <p>{randomUserDataJSON}</p>
    </div>
  );
}
