import type { Technology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
    technologies: Technology[];
}

const Technologies = ({ technologies }: TechnologiesProps) => {
    return (
        <section id="technologies" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-left mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                        Explore the{" "}
                        <span className="gradient-text">
                            Technologies
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-3 max-w-2xl">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Technology Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Technologies;