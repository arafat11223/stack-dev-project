import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  // Store technologies from data.json
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Fetch technology data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  // Show loading message while data is loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">
          Loading technologies...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        
        {/* Hero Section */}
        <Hero />

        {/* Technologies section will be added in Step 7 */}
        <section>
          <p className="text-center py-10">
            Technologies section coming soon...
          </p>
        </section>

      </main>

      {/* Footer will be added later */}
    </div>
  );
}

export default App;