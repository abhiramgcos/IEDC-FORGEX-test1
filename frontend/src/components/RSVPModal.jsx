import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const RSVPModal = ({ isOpen, onClose }) => {
  // Placeholder Google Form URL - replace with actual form URL
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/PLACEHOLDER_FORM_ID/viewform?embedded=true';

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-gradient-to-br from-zinc-900 to-black rounded-2xl shadow-2xl border border-amber-500/30 overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-600/20 rounded-full filter blur-3xl" />

            {/* Header */}
            <div className="relative border-b border-amber-500/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                    Reserve Your Spot
                  </h2>
                  <p className="text-gray-400 mt-1">Fill out the form below to register for FORGEX Talk</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full bg-zinc-800 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500 transition-all duration-300 text-gray-400 hover:text-amber-400"
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {/* Google Form Iframe */}
            <div className="relative p-6 max-h-[600px] overflow-hidden">
              <div className="w-full h-[550px] rounded-lg overflow-hidden bg-zinc-900/50 border border-amber-500/20">
                <iframe
                  src={GOOGLE_FORM_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="RSVP Form"
                  className="w-full h-full"
                >
                  Loading…
                </iframe>
              </div>

              {/* Placeholder Text (remove when actual form is embedded) */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/90 backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-600/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Google Form Placeholder</h3>
                  <p className="text-gray-400 mb-6 max-w-md">
                    Replace the <code className="px-2 py-1 bg-zinc-800 text-amber-400 rounded text-sm">GOOGLE_FORM_URL</code> in <code className="px-2 py-1 bg-zinc-800 text-amber-400 rounded text-sm">RSVPModal.jsx</code> with your actual Google Form embed URL.
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>📝 Create a Google Form</p>
                    <p>🔗 Get the embed link</p>
                    <p>⚙️ Replace the placeholder URL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Border Animation */}
            <div className="absolute inset-0 border-2 border-amber-500/20 rounded-2xl pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RSVPModal;