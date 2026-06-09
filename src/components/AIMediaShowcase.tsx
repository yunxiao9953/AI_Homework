import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Film } from 'lucide-react';
import { video, imageSeries } from '../data/mockData';

const AIMediaShowcase = () => {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowVideoModal(false);
        setSelectedSeries(null);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const isModalOpen = showVideoModal || selectedSeries !== null;
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showVideoModal, selectedSeries]);

  const handlePrevImage = () => {
    if (!selectedSeries) return;
    const series = imageSeries.find(s => s.id === selectedSeries);
    if (!series) return;
    setCurrentImageIndex(prev => prev === 0 ? series.images.length - 1 : prev - 1);
  };

  const handleNextImage = () => {
    if (!selectedSeries) return;
    const series = imageSeries.find(s => s.id === selectedSeries);
    if (!series) return;
    setCurrentImageIndex(prev => prev === series.images.length - 1 ? 0 : prev + 1);
  };

  const openImageViewer = (seriesId: string) => {
    setSelectedSeries(seriesId);
    setCurrentImageIndex(0);
  };

  const closeImageViewer = () => {
    setSelectedSeries(null);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <section id="media" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 text-sm mb-4">
            AI创作
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI生成作品
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            使用即梦、Liblib等AI工具创作的视频和图像作品
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-md border border-white/10">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/images/Video_cover.png"
                  alt={video.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-pink-500/80 transition-colors duration-300"
                  >
                    <Play size={40} className="text-white ml-2" />
                  </button>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Film className="text-pink-400" size={20} />
                  <span className="text-pink-400 text-sm">AI动画</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-white/60 text-sm">{video.description}</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {imageSeries.map((series, index) => (
                <motion.div
                  key={series.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-md border border-white/10 hover:border-pink-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => openImageViewer(series.id)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={series.images[0]}
                      alt={series.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-full bg-pink-500/80 text-white text-xs font-medium">
                        {series.style}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ImageIcon size={28} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white">{series.title}</h3>
                      <span className="text-white/50 text-sm">{series.images.length} 张</span>
                    </div>
                    <p className="text-white/60 text-sm mt-1">{series.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-3 rounded-full bg-red-500/80 hover:bg-red-600 text-white transition-colors z-10"
                onClick={closeVideoModal}
              >
                <X size={24} />
              </button>

              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <video
                  src={video.videoUrl}
                  controls
                  autoPlay
                  preload="metadata"
                  poster="/images/Video_cover.png"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 p-4 bg-white/5 rounded-xl">
                <h3 className="text-white font-bold mb-2">{video.title}</h3>
                <p className="text-white/60 text-sm mb-4">{video.description}</p>
                
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-xs mb-2">提示词</p>
                  <p className="text-white/80 text-sm italic">" {video.prompt} "</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {selectedSeries && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
            onClick={closeImageViewer}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-red-500/80 hover:bg-red-600 text-white transition-colors z-10"
              onClick={closeImageViewer}
            >
              <X size={24} />
            </button>

            <div className="w-full max-w-4xl flex-1 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="aspect-video rounded-xl overflow-hidden shadow-2xl max-w-full w-full"
              >
                <img
                  src={imageSeries.find(s => s.id === selectedSeries)?.images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain bg-black"
                  loading="lazy"
                />
              </motion.div>

              <div className="flex items-center justify-between w-full max-w-4xl mt-6">
                <button
                  onClick={handlePrevImage}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="flex items-center gap-4">
                  <span className="text-white/80">
                    {currentImageIndex + 1} / {imageSeries.find(s => s.id === selectedSeries)?.images.length}
                  </span>
                  <span className="text-white/50">
                    {imageSeries.find(s => s.id === selectedSeries)?.title}
                  </span>
                </div>

                <button
                  onClick={handleNextImage}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIMediaShowcase;