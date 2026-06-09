import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
        
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/80 text-lg font-medium"
        >
          正在加载资源...
        </motion.p>
        
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;