import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="mt-12 sm:mt-16 bg-neutral-900 text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl mb-4 text-purple-300">Yogika</h3>
            <p className="text-sm sm:text-base text-neutral-400">
              Data Science student passionate about machine learning, AI, and
              turning data into insights.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {["HELLO", "EXPERIENCES", "WORK", "CONTACT"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link.toLowerCase().replace(" ", "-");
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm sm:text-base text-neutral-400 hover:text-purple-300 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-base sm:text-lg">Connect</h4>
            <div className="space-y-3">
              {[
                { name: "LinkedIn", url: "#" },
                { name: "GitHub", url: "#" },
                { name: "Twitter", url: "#" },
                { name: "Email", url: "mailto:yogika@example.com" },
              ].map((social) => (
                <div key={social.name}>
                  <a
                    href={social.url}
                    className="text-sm sm:text-base text-neutral-400 hover:text-teal-300 transition-colors inline-block"
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-neutral-400 text-sm sm:text-base"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>by Yogika © 2025</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-purple-500 hover:bg-purple-400 border-2 border-white flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
