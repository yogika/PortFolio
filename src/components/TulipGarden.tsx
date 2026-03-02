import { motion } from "motion/react";
import { Plus } from "lucide-react";

export function TulipGarden() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-start">
      <div className="w-60 sm:w-72 relative h-80">
        <div className="relative h-full">
          <motion.div
            initial={{ scale: 0, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute left-2 bottom-24"
          >
            <motion.div
              animate={{ rotate: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-32 bg-green-600 border-2 border-neutral-800 mx-auto" />
              <div className="absolute top-16 -left-3 w-8 h-4 bg-green-500 border-2 border-neutral-800 rounded-full transform -rotate-45" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-6 h-10 bg-pink-400 border-2 border-neutral-800 rounded-t-full" />
                  <div className="absolute -left-3 top-2 w-6 h-10 bg-pink-500 border-2 border-neutral-800 rounded-t-full transform -rotate-45" />
                  <div className="absolute -right-3 top-2 w-6 h-10 bg-pink-300 border-2 border-neutral-800 rounded-t-full transform rotate-45" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute left-14 bottom-20"
          >
            <motion.div
              animate={{ rotate: [0, 3, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-36 bg-green-600 border-2 border-neutral-800 mx-auto" />
              <div className="absolute top-20 -right-3 w-8 h-4 bg-green-500 border-2 border-neutral-800 rounded-full transform rotate-45" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-6 h-10 bg-purple-400 border-2 border-neutral-800 rounded-t-full" />
                  <div className="absolute -left-3 top-2 w-6 h-10 bg-purple-500 border-2 border-neutral-800 rounded-t-full transform -rotate-45" />
                  <div className="absolute -right-3 top-2 w-6 h-10 bg-purple-300 border-2 border-neutral-800 rounded-t-full transform rotate-45" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute left-7 bottom-16"
          >
            <motion.div
              animate={{ rotate: [0, -2, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-28 bg-green-600 border-2 border-neutral-800 mx-auto" />
              <div className="absolute top-14 -left-2 w-6 h-3 bg-green-500 border-2 border-neutral-800 rounded-full transform -rotate-30" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-5 h-9 bg-yellow-300 border-2 border-neutral-800 rounded-t-full" />
                  <div className="absolute -left-2 top-2 w-5 h-9 bg-yellow-400 border-2 border-neutral-800 rounded-t-full transform -rotate-45" />
                  <div className="absolute -right-2 top-2 w-5 h-9 bg-yellow-200 border-2 border-neutral-800 rounded-t-full transform rotate-45" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute right-0 bottom-14"
          >
            <motion.div
              animate={{ rotate: [0, 4, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-32 bg-green-600 border-2 border-neutral-800 mx-auto" />
              <div className="absolute top-18 -right-2 w-7 h-4 bg-green-500 border-2 border-neutral-800 rounded-full transform rotate-30" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-6 h-10 bg-teal-300 border-2 border-neutral-800 rounded-t-full" />
                  <div className="absolute -left-3 top-2 w-6 h-10 bg-teal-400 border-2 border-neutral-800 rounded-t-full transform -rotate-45" />
                  <div className="absolute -right-3 top-2 w-6 h-10 bg-teal-200 border-2 border-neutral-800 rounded-t-full transform rotate-45" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute left-1 bottom-10"
          >
            <motion.div
              animate={{ rotate: [0, -3, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-24 bg-green-600 border-2 border-neutral-800 mx-auto" />
              <div className="absolute top-12 -left-3 w-6 h-3 bg-green-500 border-2 border-neutral-800 rounded-full transform -rotate-40" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-5 h-8 bg-orange-300 border-2 border-neutral-800 rounded-t-full" />
                  <div className="absolute -left-2 top-1 w-5 h-8 bg-orange-400 border-2 border-neutral-800 rounded-t-full transform -rotate-45" />
                  <div className="absolute -right-2 top-1 w-5 h-8 bg-orange-200 border-2 border-neutral-800 rounded-t-full transform rotate-45" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute left-18 bottom-14"
          >
            <motion.div
              animate={{ rotate: [0, -2, 0] }}
              transition={{
                duration: 2.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-26 bg-green-600 border-2 border-neutral-800 mx-auto" />
              <div className="absolute top-12 -right-2 w-6 h-3 bg-green-500 border-2 border-neutral-800 rounded-full transform rotate-30" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-5 h-8 bg-purple-300 border-2 border-neutral-800 rounded-t-full" />
                  <div className="absolute -left-2 top-1 w-5 h-8 bg-purple-400 border-2 border-neutral-800 rounded-t-full transform -rotate-45" />
                  <div className="absolute -right-2 top-1 w-5 h-8 bg-purple-200 border-2 border-neutral-800 rounded-t-full transform rotate-45" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex justify-between gap-1">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="w-2.5 h-8 bg-green-400 border-2 border-neutral-800 origin-bottom"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-4 right-2"
          >
            <Plus className="w-4 h-4 text-pink-400" />
          </motion.div>

          <motion.div
            animate={{
              x: [0, -8, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-12 left-0"
          >
            <Plus className="w-3 h-3 text-purple-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
