import { motion } from 'framer-motion';
import { Heart, Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.a
              href="#hero"
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              AI Portfolio
            </motion.a>
            <p className="text-white/50 mt-4 text-sm">
              汇集AI通识课程学习成果的作品集网页，展示视频、游戏和项目作品。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {[
                { name: '首页', href: '#hero' },
                { name: 'AI作品', href: '#media' },
                { name: '游戏', href: '#games' },
                { name: '音乐', href: '#music' },
                { name: '关于', href: '#about' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">联系我</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-white/10 hover:bg-pink-500/50 text-white/70 hover:text-white transition-all"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-white/10 hover:bg-pink-500/50 text-white/70 hover:text-white transition-all"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-white/10 hover:bg-pink-500/50 text-white/70 hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 AI通识课作品集. 保留所有权利.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400" /> by 25计科曹玥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
