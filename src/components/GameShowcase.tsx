import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Github, Gamepad2, Sparkles, FileText, Code, Image as ImageIcon } from 'lucide-react';
import { games } from '../data/mockData';

const GameShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  useEffect(() => {
    const isModalOpen = selectedVideo !== null;
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedVideo]);

  const currentGame = selectedGame !== null ? games[selectedGame] : null;
  const isLocalVideo = currentGame?.videoUrl?.endsWith('.mp4');

  const closeModal = () => {
    setSelectedVideo(null);
    setSelectedGame(null);
  };

  return (
    <section id="games" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-sm mb-4">
            AI游戏项目
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI驱动的互动作品
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            使用人工智能技术创作的互动游戏和创意项目
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-md border border-white/10 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/80 text-white text-xs font-medium flex items-center gap-1">
                    <Gamepad2 size={12} />
                    AI驱动
                  </span>
                </div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <button
                    onClick={() => {
                      setSelectedVideo(game.videoUrl);
                      setSelectedGame(index);
                    }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-green-500/80 transition-colors duration-300"
                  >
                    <Play size={32} className="text-white ml-1" />
                  </button>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {game.title}
                </h3>
                <p className="text-white/60 mb-4">
                  {game.description}
                </p>

                {game.designConcept && (
                  <div className="mb-4 space-y-2">
                    <p className="text-white/50 text-xs uppercase tracking-wider">设计理念</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-white/70">
                        <ImageIcon size={14} className="mt-0.5 text-pink-400" />
                        <span>{game.designConcept.images}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-white/70">
                        <FileText size={14} className="mt-0.5 text-purple-400" />
                        <span>{game.designConcept.script}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-white/70">
                        <Code size={14} className="mt-0.5 text-cyan-400" />
                        <span>{game.designConcept.code}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedVideo(game.videoUrl);
                      setSelectedGame(index);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30 transition-all duration-300 text-sm font-medium"
                  >
                    <Play size={16} />
                    观看演示
                  </button>
                  {game.hasGithub && game.githubUrl && (
                    <a
                      href={game.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 transition-all duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      原链接
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedVideo && selectedGame !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-3 rounded-full bg-red-500/80 hover:bg-red-600 text-white transition-colors z-10"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
              {isLocalVideo ? (
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  preload="metadata"
                  poster={currentGame?.coverImage}
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="游戏演示"
                  loading="lazy"
                />
              )}
            </div>

            {games[selectedGame]?.designConcept && (
              <div className="mt-4 p-4 bg-white/5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-pink-400" size={20} />
                  <h4 className="text-white font-semibold">设计理念</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <ImageIcon size={16} className="mt-1 text-pink-400" />
                    <p className="text-white/70 text-sm">{games[selectedGame].designConcept.images}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText size={16} className="mt-1 text-purple-400" />
                    <p className="text-white/70 text-sm">{games[selectedGame].designConcept.script}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Code size={16} className="mt-1 text-cyan-400" />
                    <p className="text-white/70 text-sm">{games[selectedGame].designConcept.code}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GameShowcase;