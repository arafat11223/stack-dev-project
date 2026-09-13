import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">

      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">

        {/* Icon + Name */}
        <div className="flex items-center gap-3">

          <img
            src={technology.icon}
            alt={technology.name}
            className="w-12 h-12 object-contain"
          />

          <div>
            <h3 className="font-bold text-lg text-gray-900">
              {technology.name}
            </h3>

            <span className="text-xs text-gray-500">
              {technology.category}
            </span>
          </div>

        </div>

        {/* Badge */}
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-600">
          {technology.badge}
        </span>

      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-6 mt-4">
        {technology.description}
      </p>

      {/* Information */}
      <div className="flex items-center justify-between mt-5">

        {/* Difficulty */}
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
          {technology.difficulty}
        </span>

        {/* Rating */}
        <span className="text-sm font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        onClick={() => onAddToStack(technology)}
        className={`w-full mt-5 py-2.5 rounded-xl text-white font-semibold text-sm transition ${
          isAdded
            ? "bg-gray-400 hover:bg-gray-500"
            : "gradient-theme hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;