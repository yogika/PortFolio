import { motion } from 'motion/react';
import { Database, Brain, LineChart, Code, Laptop, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'XGBoost', level: 85 }
    ]
  },
  {
    icon: Code,
    title: 'Programming',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'R', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 70 }
    ]
  },
  {
    icon: LineChart,
    title: 'Data Analysis',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Seaborn', level: 85 }
    ]
  },
  {
    icon: Database,
    title: 'Data Engineering',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Apache Spark', level: 70 },
      { name: 'Docker', level: 75 }
    ]
  },
  {
    icon: Laptop,
    title: 'Deep Learning',
    skills: [
      { name: 'CNN', level: 85 },
      { name: 'RNN/LSTM', level: 80 },
      { name: 'Transformers', level: 75 },
      { name: 'GANs', level: 70 }
    ]
  },
  {
    icon: GitBranch,
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Jupyter', level: 95 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 80 }
    ]
  }
];

export function Skills() {
  return (
    <div className="min-h-screen py-24 px-6 relative bg-neutral-900/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )
          `
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 border border-emerald-400/30 rounded-full mb-6 text-xs tracking-wider text-emerald-400">
            EXPERTISE
          </div>
          <h2 className="tracking-tighter mb-4">Skills & Technologies</h2>
          <p className="text-neutral-400 max-w-2xl">
            Comprehensive technical skills across the data science stack, from data collection to model deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-neutral-900/50 backdrop-blur border border-neutral-800 p-6 hover:border-emerald-400/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="tracking-tight">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-300">{skill.name}</span>
                      <span className="text-xs text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-neutral-900/50 backdrop-blur border border-neutral-800 p-8"
        >
          <h3 className="tracking-tight mb-6">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2024' },
              { title: 'AWS Machine Learning', issuer: 'Amazon Web Services', year: '2024' },
              { title: 'Data Science Professional', issuer: 'IBM', year: '2023' }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-neutral-800 p-4 hover:border-emerald-400/50 transition-colors"
              >
                <div className="text-xs text-emerald-400 mb-2">{cert.year}</div>
                <div className="mb-1">{cert.title}</div>
                <div className="text-sm text-neutral-500">{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
