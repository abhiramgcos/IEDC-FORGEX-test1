import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Trophy, Zap } from 'lucide-react';

const EventInfo = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation Talks',
      description: 'Hear from industry leaders about cutting-edge technologies and future trends.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with like-minded innovators, entrepreneurs, and tech enthusiasts.',
    },
    {
      icon: Trophy,
      title: 'Workshops',
      description: 'Hands-on sessions to learn new skills and apply innovative solutions.',
    },
    {
      icon: Zap,
      title: 'Pitch Sessions',
      description: 'Showcase your ideas and get feedback from experienced mentors and investors.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What to <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">Expect</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            An immersive day filled with inspiration, innovation, and opportunities to forge your path in technology.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(251, 191, 36, 0.2)',
              }}
              className="group relative p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-amber-500/20 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-amber-500" size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-xl transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Event Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'Attendees' },
            { number: '20+', label: 'Speakers' },
            { number: '10+', label: 'Workshops' },
            { number: '8hrs', label: 'Content' },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventInfo;