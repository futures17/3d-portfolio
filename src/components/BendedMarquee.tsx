import { motion } from 'framer-motion';

const BendedMarquee = () => {
  const text = "THE FUTURE AGENT • THE FUTURE AGENT • THE FUTURE AGENT • THE FUTURE AGENT • ";
  
  return (
    <div className="relative w-full py-20 bg-[#0C0C0C] overflow-hidden -mt-10 mb-10">
      <div 
        className="flex items-center whitespace-nowrap overflow-hidden bg-white py-6"
        style={{ transform: 'rotate(-7deg) scale(1.1)', transformOrigin: 'center' }}
      >
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4"
        >
          <span className="text-black font-black text-6xl md:text-8xl uppercase tracking-tighter">
            {text}
          </span>
          <span className="text-black font-black text-6xl md:text-8xl uppercase tracking-tighter">
            {text}
          </span>
        </motion.div>
      </div>

      <div 
        className="flex items-center whitespace-nowrap overflow-hidden bg-transparent border-y border-white/20 py-6 mt-4"
        style={{ transform: 'rotate(5deg) scale(1.1)', transformOrigin: 'center' }}
      >
        <motion.div
          animate={{
            x: [-1000, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4"
        >
          <span className="text-transparent font-black text-6xl md:text-8xl uppercase tracking-tighter" style={{ WebkitTextStroke: '1px white' }}>
            {text}
          </span>
          <span className="text-transparent font-black text-6xl md:text-8xl uppercase tracking-tighter" style={{ WebkitTextStroke: '1px white' }}>
            {text}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default BendedMarquee;
