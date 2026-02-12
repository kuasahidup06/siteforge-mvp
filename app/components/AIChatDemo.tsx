'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function AIChatDemo() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);

    // Mock AI response (karena static export – ganti nanti dengan real API di Vercel)
    setTimeout(() => {
      const mockResponse = `Generated sitemap for "${input}": 
- Home
- About
- Services
- Portfolio
- Contact

Want premium Tailwind styling & Framer Motion animations? Say "enhance vibe futuristic".`;
      setMessages(prev => [...prev, { role: 'assistant', content: mockResponse }]);
    }, 800);

    setInput('');
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
      <div className="h-96 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600/30' : 'bg-slate-800/80'}`}>
              {msg.content}
            </div>
          </motion.div>
        ))}
        {messages.length === 0 && (
          <p className="text-center text-slate-500 italic">Type your website idea to start forging...</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-800 flex gap-3">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="e.g. Modern SaaS landing page for AI tool..."
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 px-6 rounded-lg transition flex items-center">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
    }
