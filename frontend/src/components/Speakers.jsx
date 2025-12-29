import React from 'react';
import { motion } from 'framer-motion';
import { User, Linkedin } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      title: 'AI Research Lead',
      company: 'TechCorp Innovation',
      topic: 'The Future of AI in Enterprise',
      image: null, // Placeholder
    },
    {
      name: 'John Maxwell',
      title: 'Startup Founder & CEO',
      company: 'NextGen Solutions',
      topic: 'Building Scalable Tech Startups',
      image: null,
    },
    {
      name: 'Maria Rodriguez',
      title: 'Blockchain Architect',
      company: 'CryptoVentures',
      topic: 'Decentralized Future',
      image: null,
    },
    {
      name: 'Dr. James Wilson',
      title: 'IoT Expert',
      company: 'Smart Systems Inc',
      topic: 'Connected Ecosystems',
      image: null,
    },
  ];

  const agenda = [
    { time: '09:00 AM', event: 'Registration & Networking', type: 'general' },
    { time: '10:00 AM', event: 'Opening Keynote', speaker: 'Dr. Sarah Chen', type: 'keynote' },
    { time: '11:00 AM', event: 'Workshop: AI Implementation', type: 'workshop' },
    { time: '12:30 PM', event: 'Lunch Break & Networking', type: 'break' },
    { time: '02:00 PM', event: 'Panel Discussion: Future Tech', type: 'panel' },
    { time: '03:30 PM', event: 'Startup Pitch Sessions', type: 'pitch' },
    { time: '05:00 PM', event: 'Closing Remarks & Networking', type: 'general' },
  ];

  return (
    <section id="speakers" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #fbbf24 1px, transparent 1px), linear-gradient(to bottom, #fbbf24 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Speakers Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">Speakers</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Learn from industry pioneers and visionaries shaping the future of technology.
          </p>
        </motion.div>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden border border-amber-500/20"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
                <User className="text-amber-500/30" size={80} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-amber-500 text-sm font-semibold mb-1">{speaker.title}</p>
                <p className="text-gray-500 text-sm mb-3">{speaker.company}</p>
                <div className="h-px bg-gradient-to-r from-amber-500/50 to-transparent mb-3" />
                <p className="text-gray-400 text-sm italic">"{speaker.topic}"</p>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Agenda Section */}
        <motion.div
          id="agenda"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Event <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">Agenda</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-yellow-600 to-amber-500" />

            {agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-amber-500 border-4 border-black shadow-lg shadow-amber-500/50" />

                {/* Content Card */}
                <div className="group bg-gradient-to-br from-zinc-900 to-black p-6 rounded-lg border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-amber-500 font-bold text-lg">{item.time}</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-amber-400 transition-colors">
                    {item.event}
                  </h4>
                  {item.speaker && (
                    <p className="text-gray-400 text-sm">by {item.speaker}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;