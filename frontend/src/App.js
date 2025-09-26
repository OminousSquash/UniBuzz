// frontend/src/App.js
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => setMessage(d.ok ? "API OK" : "API down"))
      .catch(() => setMessage("API error"));
  }, []);
  return <h1>{message}</h1>;
}

export default App;
