import { motion } from "motion/react";
import {
  Plus,
  Brain,
  Code,
  Database,
  Briefcase,
  GraduationCap,
  Book,
  Music,
  Camera,
  Gamepad2,
  Plane,
  Award,
  Globe,
  Coffee,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const iconMap = {
  Brain,
  Code,
  Database,
  Book,
  Music,
  Camera,
  Gamepad2,
  Plane,
  Coffee,
};

export function Experience() {
  const { education, work, skills, languages, hobbies, certifications } =
    portfolioData;

  return (
    <div
      id="experiences"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Left Column */}
        <div className="space-y-8 sm:space-y-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Plus className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500" />
              <h3 className="text-3xl sm:text-4xl tracking-tight text-neutral-800">
                EDUCATION
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-4 sm:p-5 bg-white border-2 border-neutral-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                        <div className="text-base sm:text-lg text-neutral-800">
                          {edu.degree}
                        </div>
                        <div className="text-xs text-neutral-500 whitespace-nowrap">
                          {edu.period}
                        </div>
                      </div>
                      <div className="text-sm text-purple-600 mb-1">
                        {edu.institution}, {edu.location}
                      </div>
                      <div className="text-xs text-neutral-600 mb-2">
                        GPA: {edu.gpa}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600">
                        <span className="font-semibold">Coursework:</span>{" "}
                        {edu.coursework}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Plus className="w-6 sm:w-8 h-6 sm:h-8 text-teal-500" />
              <h3 className="text-3xl sm:text-4xl tracking-tight text-neutral-800">
                WORK
              </h3>
            </div>
            <div className="space-y-4">
              {work.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-4 sm:p-5 bg-white border-2 border-neutral-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-4 sm:w-5 h-4 sm:h-5 text-teal-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                        <div className="text-base sm:text-lg text-neutral-800">
                          {item.title}
                        </div>
                        <div className="text-xs text-neutral-500 whitespace-nowrap">
                          {item.period}
                        </div>
                      </div>
                      <div className="text-sm text-teal-600 mb-2">
                        {item.company} - {item.location}
                      </div>
                      <ul className="text-xs sm:text-sm text-neutral-600 space-y-1">
                        {item.description.map((desc, idx) => (
                          <li key={idx}>• {desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Plus className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
              <h3 className="text-3xl sm:text-4xl tracking-tight text-neutral-800">
                SKILLS
              </h3>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 sm:p-4 bg-white border-2 border-neutral-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="text-sm text-neutral-800 mb-2">
                    {skill.category}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600">
                    {skill.items}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column */}
        <div className="space-y-8 sm:space-y-12">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Plus className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500" />
              <h3 className="text-3xl sm:text-4xl tracking-tight text-neutral-800">
                CONTACT
              </h3>
            </div>
            <div className="p-4 sm:p-6 bg-purple-100 border-2 border-neutral-800">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-neutral-600 mb-1">Email</div>
                  <a
                    href="mailto:yogikathakur777@gmail.com"
                    className="text-base sm:text-lg text-purple-600 hover:underline break-all"
                  >
                    yogikathakur777@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-1">Phone</div>
                  <div className="text-base sm:text-lg text-neutral-800">
                    0176 89107262
                  </div>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-1">Location</div>
                  <div className="text-base sm:text-lg text-neutral-800">
                    Germany 🇩🇪
                  </div>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-1">Socials</div>
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    <a
                      href="https://linkedin.com/in/yogika"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-white border-2 border-neutral-800 hover:bg-purple-200 transition-colors text-xs sm:text-sm"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/yogika"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-white border-2 border-neutral-800 hover:bg-purple-200 transition-colors text-xs sm:text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://yogika.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-white border-2 border-neutral-800 hover:bg-purple-200 transition-colors text-xs sm:text-sm"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Plus className="w-6 sm:w-8 h-6 sm:h-8 text-teal-500" />
              <h3 className="text-3xl sm:text-4xl tracking-tight text-neutral-800">
                LANGUAGES
              </h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base text-neutral-800">
                      {lang.language}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-600">
                      {lang.proficiency}
                    </span>
                  </div>
                  <div className="h-2 sm:h-3 bg-white border-2 border-neutral-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="h-full bg-teal-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Plus className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500" />
              <h3 className="text-3xl sm:text-4xl tracking-tight text-neutral-800">
                CERTIFICATIONS
              </h3>
            </div>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 sm:p-4 bg-white border-2 border-neutral-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                        <div className="text-sm sm:text-base text-neutral-800">
                          {cert.title}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {cert.date}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-orange-600 mb-1">
                        {cert.issuer}
                      </div>
                      <p className="text-xs text-neutral-600">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Plus className="w-6 sm:w-8 h-6 sm:h-8 text-pink-500" />
              <h3 className="text-3xl sm:text-4xl tracking-tight text-neutral-800">
                HOBBIES
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {hobbies.map((hobby) => {
                const IconComponent =
                  iconMap[hobby.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={hobby.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${hobby.color} border-2 border-neutral-800 p-3 sm:p-4 flex flex-col items-center justify-center aspect-square`}
                  >
                    <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-neutral-800 mb-2" />
                    <div className="text-[10px] sm:text-xs text-center text-neutral-800">
                      {hobby.text}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
