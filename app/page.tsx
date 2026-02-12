import AIChatDemo from "@/components/AIChatDemo";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-cyan-950/10" />

      <nav className="relative z-10 p-6 flex justify-between items-center backdrop-blur-md border-b border-slate-800/50">
        <h1 className="text-2xl font-bold tracking-tight">SiteForge</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-cyan-400 transition">Features</a>
          <a href="#" className="hover:text-cyan-400 transition">Pricing</a>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Build Premium Websites <br />
          <span className="text-cyan-400">with Agentic AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Describe your vibe → AI generates sitemap, wireframe, content & Next.js code. Ready for clients in minutes.
        </motion.p>

        <motion.a
          href="#demo"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold py-4 px-10 rounded-xl shadow-2xl transition-all"
        >
          Forge Your First Site — Free
        </motion.a>
      </section>

      <section id="demo" className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Try AI Builder Demo</h2>
        <AIChatDemo />
      </section>
    </main>
  );
        }
