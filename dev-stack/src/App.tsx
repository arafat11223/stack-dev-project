import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading technologies...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <h1>Dev Stack</h1>

      <p>Total Technologies: {technologies.length}</p>
    </div>
  );
}

export default App;