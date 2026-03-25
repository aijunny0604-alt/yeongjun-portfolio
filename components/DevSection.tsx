import React, { useState, useEffect, RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DevProject } from '../types';
import { Code2, ExternalLink, X, ChevronRight } from 'lucide-react';
import Lenis from 'lenis';

interface DevSectionProps {
  items: DevProject[];
  lenisRef: RefObject<Lenis | null>;
}

const DevSection: React.FC<DevSectionProps> = ({ items, lenisRef }) => {
  const [selectedProject, setSelectedProject] = useState<DevProject | null>(null);

  // Lock Lenis smooth scroll + body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      lenisRef.current?.stop();
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      lenisRef.current?.start();
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedProject, lenisRef]);

  return (
    <>
      <section id="development" className="relative z-10 bg-neutral-950 text-white px-6 md:px-20 py-32">
        <div className="max-w-full mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-neutral-800 pb-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Development Projects
                </span>
              </div>
              <h2 className="text-5xl md:text-9xl font-serif leading-[0.85]">
                Dev<br />Works
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 md:mt-0"
            >
              <span className="text-sm font-mono text-neutral-500 block text-right">
                AI-Assisted Development
              </span>
              <span className="text-sm font-mono text-neutral-600 block text-right mt-1">
                (2024 — 2026)
              </span>
            </motion.div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {items.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[16/10] bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {project.liveUrl && (
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-mono mb-3">{project.subtitle}</p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-neutral-800 rounded-full text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-1 text-[11px] font-mono text-neutral-600">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors">
                    <span>자세히 보기</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain"
            data-lenis-prevent
            onClick={() => setSelectedProject(null)}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Content - centered with padding */}
            <div className="relative min-h-full flex items-start justify-center py-8 px-4 md:px-8" data-lenis-prevent>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="sticky top-4 float-right mr-4 mt-4 z-10 p-2 bg-neutral-900/80 backdrop-blur rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-neutral-400" />
                </button>

                {/* Title */}
                <div className="px-8 pt-8 pb-4" style={{ clear: 'both' }}>
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-neutral-400 font-mono text-sm">{selectedProject.subtitle}</p>
                </div>

                {/* Gallery - vertical scroll */}
                <div className="px-8 space-y-4">
                  {selectedProject.gallery.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-neutral-800">
                      <img
                        src={img}
                        alt={`${selectedProject.title} - ${i + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8 keep-all">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-mono border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-neutral-300">
                          <span className="text-emerald-400 mt-0.5 text-sm">&#9656;</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {selectedProject.liveUrl && (
                    <div className="pt-4 border-t border-neutral-800">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-mono transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DevSection;
