import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold max-w-4xl"
        >
          Digital Marketing Built for Measurable Growth
        </motion.h1>

        <p className="mt-6 text-xl max-w-2xl text-slate-300">
          Adfirm Media partners with ambitious brands to drive performance,
          scale revenue, and build long-term digital authority.
        </p>
      </div>
    </section>
  );
}
