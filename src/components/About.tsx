import { motion } from "motion/react";
import { Plus, Download } from "lucide-react";
import profileImage from "../assets/356e12c51883f380e9da3e0240c53dbff11a59ad.png";

interface AboutProps {
  projectsCount: number;
  skillsCount: number;
  experiencesCount: number;
}

export function About({
  projectsCount,
  skillsCount,
  experiencesCount,
}: AboutProps) {
  // Calculate years of experience
  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const yearsExperience = currentYear - startYear;

  // Download CV function
  const handleDownloadCV = () => {
    // Option 1: If you have a CV file in the public folder
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Place your CV file as 'cv.pdf' in the public folder
    link.download = "Yogika_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Option 2: If you want to open a Google Drive or external link
    // window.open('YOUR_CV_LINK_HERE', '_blank');
  };

  return (
    <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-purple-100 rounded-3xl p-4 sm:p-8 border-4 border-neutral-800 overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 sm:top-8 right-4 sm:right-8 text-teal-500 z-10"
            >
              <Plus className="w-8 sm:w-12 h-8 sm:h-12" />
            </motion.div>

            <div className="relative aspect-[3/4] sm:aspect-square w-full">
              <img
                src={profileImage}
                alt="Yogika"
                className="w-full h-full object-cover object-center rounded-2xl border-4 border-neutral-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            {/* Corner decoration */}
            <div className="absolute -bottom-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-yellow-300 rounded-full border-4 border-neutral-800" />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Title */}
          <div className="relative">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-4 text-purple-400"
            >
              <Plus className="w-8 sm:w-10 h-8 sm:h-10" />
            </motion.div>
            <h2 className="text-4xl sm:text-6xl tracking-tight text-neutral-800">
              HELLO!
            </h2>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-neutral-700 text-base sm:text-lg">
            <p>
              Hi! I'm <span className="text-purple-600">Yogika</span>.
            </p>
            <p>
              I'm a passionate data science student based in Germany, dedicated
              to transforming complex datasets into meaningful insights. My
              journey combines statistical analysis, machine learning, and
              creative problem-solving.
            </p>
            <p>
              I specialize in building intelligent systems that learn from data,
              creating visualizations that tell compelling stories, and
              developing solutions that make a real-world impact.
            </p>
            <p className="text-neutral-600 italic text-sm sm:text-base">
              "Data is the new oil, but only if you know how to refine it."
            </p>
          </div>

          {/* Download CV Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-purple-500 text-white border-4 border-neutral-800 hover:bg-purple-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base"
            >
              <Download className="w-4 sm:w-5 h-4 sm:h-5" />
              Download CV
            </button>
          </motion.div>

          {/* Quick Stats - Dynamic */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-8">
            {[
              { label: "Projects", value: projectsCount },
              { label: "Skills", value: skillsCount },
              { label: "Years", value: yearsExperience },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-3 sm:p-4 bg-teal-100 border-2 border-neutral-800"
              >
                <div className="text-2xl sm:text-3xl text-neutral-800 mb-1">
                  {stat.value}+
                </div>
                <div className="text-xs sm:text-sm text-neutral-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
