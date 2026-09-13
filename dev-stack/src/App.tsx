import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import type { Technology } from "./types/technology";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import YourStack from "./components/Stack/YourStack";

function App() {
  // All technologies
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Selected technologies
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  // Fetch technologies from JSON
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    // Duplicate check
    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack`
      );
      return;
    }

    // Add technology
    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    // Success toast
    toast.success(
      `${technology.name} added to your stack`
    );
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack`
      );
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.success(
      "All technologies removed from your stack"
    );
  };

  // Loading state
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

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
        aria-label="Notification"
      />

      {/* Navbar */}
      <Navbar />

      <main>

        {/* Hero */}
        <Hero />

        {/* Technologies + Your Stack */}
        <section
          id="technologies"
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-[1fr_320px] gap-6">

              {/* Technologies */}
              <Technologies
                technologies={technologies}
                onAddToStack={handleAddToStack}
                selectedTechnologies={selectedTechnologies}
              />

              {/* Your Stack */}
              <YourStack
                selectedTechnologies={selectedTechnologies}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default App;