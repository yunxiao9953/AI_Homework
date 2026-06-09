import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 text-sm mb-4">
            关于
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI通识课作品集
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            这里汇集了我在AI通识课程中的学习成果
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🎨</span>
              </div>
              <h3 className="text-white font-semibold mb-2">AI绘画</h3>
              <p className="text-white/50 text-sm">使用Stable Diffusion、Midjourney等工具创作数字艺术作品</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🎵</span>
              </div>
              <h3 className="text-white font-semibold mb-2">AI音乐</h3>
              <p className="text-white/50 text-sm">探索AI在音乐创作、编曲和歌词生成方面的应用</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🎮</span>
              </div>
              <h3 className="text-white font-semibold mb-2">互动游戏</h3>
              <p className="text-white/50 text-sm">使用Ren'Py等引擎开发的互动叙事游戏作品</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 mb-6">欢迎浏览我的作品集，如有任何问题或合作意向，欢迎联系我</p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
