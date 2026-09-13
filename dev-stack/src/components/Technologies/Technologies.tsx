import type { Technology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologies: Technology[];
  onAddToStack: (technology: Technology) => void;
  selectedTechnologies: Technology[];
}

const Technologies = ({
  technologies,
  onAddToStack,
  selectedTechnologies,
}: TechnologiesProps) => {
  return (
    <div>

      {/* Section Header */}
      <div className="text-center lg:text-left mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider gradient-text">
          Explore Technologies
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Build Your Developer Stack
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          Explore popular technologies and choose the tools
          that fit your development journey.
        </p>
      </div>

      {/* Technology Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAddToStack={onAddToStack}
            isAdded={selectedTechnologies.some(
              (item) => item.id === technology.id
            )}
          />
        ))}
      </div>

    </div>
  );
};

export default Technologies;