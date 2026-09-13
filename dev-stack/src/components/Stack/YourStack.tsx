import type { Technology } from "../../types/technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="bg-white rounded-2xl border border-gray-200 p-5 h-fit lg:sticky lg:top-24">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {selectedTechnologies.length} Technology Selected
          </p>
        </div>

        {/* Remove All */}
        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}

      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="py-10 text-center">

          <p className="text-gray-400 text-sm">
            No technology selected yet.
          </p>

          <p className="text-gray-400 text-xs mt-2">
            Add technologies from the list.
          </p>

        </div>
      ) : (

        /* Selected Technologies */
        <div className="space-y-3">

          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-100 rounded-xl p-3"
            >

              {/* Icon */}
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-9 h-9 object-contain"
              />

              {/* Name + Category */}
              <div className="flex-1 min-w-0">

                <h3 className="font-semibold text-sm text-gray-900 truncate">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>

              </div>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(technology.id)}
                className="text-gray-400 hover:text-red-500 text-lg"
                aria-label={`Remove ${technology.name}`}
              >
                ✕
              </button>

            </div>
          ))}

        </div>
      )}

    </aside>
  );
};

export default YourStack;