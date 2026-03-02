import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socials = [
    { icon: Mail, label: 'Email', value: 'yoika@example.com', link: 'mailto:yoika@example.com' },
    { icon: Linkedin, label: 'LinkedIn', value: '/yoika', link: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', value: '/yoika', link: 'https://github.com' },
    { icon: Twitter, label: 'Twitter', value: '@yoika', link: 'https://twitter.com' }
  ];

  return (
    <div className="min-h-screen py-24 px-6 relative bg-neutral-900/30">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
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
            GET IN TOUCH
          </div>
          <h2 className="tracking-tighter mb-4">Let's Connect</h2>
          <p className="text-neutral-400 max-w-2xl">
            Interested in collaboration or have a project in mind? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 p-8">
              <h3 className="tracking-tight mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 focus:border-emerald-400 outline-none px-4 py-3 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 focus:border-emerald-400 outline-none px-4 py-3 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-neutral-800 border border-neutral-700 focus:border-emerald-400 outline-none px-4 py-3 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-emerald-400 text-neutral-950 py-3 px-6 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 p-8">
              <h3 className="tracking-tight mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 border border-neutral-800 hover:border-emerald-400/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-emerald-400/10 border border-emerald-400/30 group-hover:bg-emerald-400/20 flex items-center justify-center transition-colors">
                      <social.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-neutral-500 mb-1">{social.label}</div>
                      <div className="text-neutral-300">{social.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 backdrop-blur border border-neutral-800 p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400">Available for Opportunities</span>
              </div>
              <p className="text-neutral-400 text-sm">
                Currently open to internships, research collaborations, and freelance projects in data science and machine learning.
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 backdrop-blur border border-neutral-800 p-6"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl text-emerald-400 mb-1">24h</div>
                  <div className="text-xs text-neutral-500">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl text-emerald-400 mb-1">GMT+1</div>
                  <div className="text-xs text-neutral-500">Time Zone</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm"
        >
          <p>© 2025 Yoika. Built with React & Motion. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
