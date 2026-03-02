import { motion } from "motion/react";
import { Plus, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { portfolioData } from "../data/portfolioData";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <div
      id="work"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-20 sm:pb-28"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <Plus className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500" />
          <h2 className="text-4xl sm:text-6xl tracking-tight text-neutral-800">
            MY WORK
          </h2>
        </div>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl">
          A collection of data science projects showcasing machine learning,
          deep learning, and data analysis work.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="border-4 border-neutral-800 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              {/* Image Container */}
              <div
                className={`${project.color} aspect-[4/3] relative overflow-hidden border-b-4 border-neutral-800 flex items-center justify-center`}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80"
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowUpRight className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-3 sm:p-4 bg-white">
                <div className="text-xs text-neutral-500 mb-1">
                  {project.category}
                </div>
                <h3 className="text-lg sm:text-xl text-neutral-800">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-12 text-center"
      >
        <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-neutral-800 text-white border-4 border-neutral-800 hover:bg-purple-500 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base">
          View All Projects
          <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      </motion.div>
    </div>
  );
}
