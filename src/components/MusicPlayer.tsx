import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, ChevronDown, ChevronUp } from 'lucide-react';
import { musicItems, backgroundMusicList } from '../data/mockData';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showBgMusicMenu, setShowBgMusicMenu] = useState(false);
  const [currentBgMusic, setCurrentBgMusic] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const audioCache = useRef<Map<number, HTMLAudioElement>>(new Map());

  useEffect(() => {
    if (bgAudioRef.current) {
      bgAudioRef.current.src = backgroundMusicList[currentBgMusic].url;
      bgAudioRef.current.loop = true;
      bgAudioRef.current.volume = 0.3;
      bgAudioRef.current.preload = 'metadata';
      bgAudioRef.current.play().catch(() => {});
    }
  }, [currentBgMusic]);

  const playTrack = (index: number) => {
    // 如果点击的是当前正在播放的歌曲，则暂停并收起
    if (currentTrack === index && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setCurrentTrack(null);
      return;
    }

    // 如果点击的是当前已暂停的歌曲，则继续播放
    if (currentTrack === index && !isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      }
      setIsPlaying(true);
      return;
    }

    // 播放新歌曲
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    // 暂停背景音乐
    if (bgAudioRef.current && !bgAudioRef.current.paused) {
      bgAudioRef.current.pause();
    }
    
    setIsLoading(true);
    setCurrentTrack(index);
    setProgress(0);
    
    let audio = audioCache.current.get(index);
    
    if (!audio) {
      audio = new Audio(musicItems[index].url);
      audio.preload = 'metadata';
      audioCache.current.set(index, audio);
    }
    
    audioRef.current = audio;
    
    audio.play().then(() => {
      setIsPlaying(true);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  };

  const togglePlay = () => {
    if (!audioRef.current || currentTrack === null) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const stopTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentTrack(null);
    setProgress(0);
    if (bgAudioRef.current) {
      bgAudioRef.current.play().catch(() => {});
    }
  };

  const toggleBgMusic = () => {
    if (!bgAudioRef.current) return;
    
    if (bgAudioRef.current.paused) {
      bgAudioRef.current.play();
    } else {
      bgAudioRef.current.pause();
    }
  };

  const changeBgMusic = (index: number) => {
    setCurrentBgMusic(index);
    setShowBgMusicMenu(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTrack(null);
        setProgress(0);
        if (bgAudioRef.current) {
          bgAudioRef.current.play().catch(() => {});
        }
      });
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [currentTrack]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="music" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-sm mb-4">
            AI音乐
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI生成音乐
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            使用AI生成的原创音乐作品，点击即可播放
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {musicItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden backdrop-blur-md border transition-all duration-300 ${
                currentTrack === index
                  ? 'bg-gradient-to-br from-green-500/30 to-emerald-600/30 border-green-500/50'
                  : 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-white/10 hover:border-green-500/30'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      currentTrack === index && isPlaying
                        ? 'bg-green-500/30 animate-pulse'
                        : 'bg-white/10'
                    }`}>
                      <Music className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-white/50 text-sm">{item.artist}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => playTrack(index)}
                    disabled={isLoading && currentTrack === index}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentTrack === index && isPlaying
                        ? 'bg-green-500 text-white'
                        : 'bg-white/10 text-white hover:bg-green-500/50'
                    } ${isLoading && currentTrack === index ? 'opacity-50' : ''}`}
                  >
                    {isLoading && currentTrack === index ? (
                      <span className="animate-spin">⏳</span>
                    ) : currentTrack === index && isPlaying ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} className="ml-0.5" />
                    )}
                  </button>
                </div>

                {currentTrack === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <div className="bg-white/5 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <button
                          onClick={togglePlay}
                          className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center hover:bg-green-500/30 transition-colors"
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                        </button>
                        <div className="flex-1">
                          <div className="h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                            if (audioRef.current && audioRef.current.duration) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const percent = (e.clientX - rect.left) / rect.width;
                              audioRef.current.currentTime = percent * audioRef.current.duration;
                            }
                          }}>
                            <motion.div
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-white/50 text-xs mt-1">
                            <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                            <span>{formatTime(duration)}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <button
                          onClick={stopTrack}
                          className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/30 transition-colors text-red-400"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 mb-4">
                      <p className="text-white/50 text-xs mb-2">作品描述</p>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 max-h-48 overflow-y-auto">
                      <p className="text-white/50 text-xs mb-2">歌词</p>
                      <pre className="text-white/80 text-sm whitespace-pre-wrap font-sans">
                        {item.lyrics}
                      </pre>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative inline-block">
            <button
              onClick={() => {
                toggleBgMusic();
                setShowBgMusicMenu(!showBgMusicMenu);
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 hover:bg-purple-500/30 transition-all duration-300"
            >
              <Music size={20} />
              <span>背景音乐</span>
              <span className="text-sm text-white/50">{backgroundMusicList[currentBgMusic].title}</span>
              {showBgMusicMenu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showBgMusicMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-full bg-gray-900/95 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden z-20"
              >
                {backgroundMusicList.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => changeBgMusic(index)}
                    className={`w-full px-4 py-3 text-left flex items-center gap-2 transition-colors ${
                      currentBgMusic === index
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {currentBgMusic === index && <span className="text-green-400">✓</span>}
                    {item.title}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <audio
        ref={audioRef}
        muted={isMuted}
        preload="metadata"
      />
      <audio ref={bgAudioRef} />
    </section>
  );
};

export default MusicPlayer;