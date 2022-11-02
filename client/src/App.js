import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.json(err));
  }, []);

  return (
    <div
      className="app">
        <h1>{!data ? "Loading..." : data}</h1>
    </div>
  );
}

export default App;
