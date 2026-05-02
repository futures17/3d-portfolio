import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-8xl md:text-9xl font-black uppercase leading-[0.8] mb-8 text-black tracking-tighter">
            Let&apos;s<br />Get In<br />Touch
          </h2>
          <a 
            href="mailto:ayushpathak@dev.com" 
            className="text-2xl font-bold text-black border-b-4 border-black pb-2 hover:opacity-70 transition-opacity"
          >
            ayushpathak@dev.com
          </a>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 w-full max-w-lg"
        >
          <div className="flex flex-col gap-2">
            <label className="text-black/40 uppercase text-xs font-bold tracking-widest">Full Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="bg-transparent border-b border-black/20 py-4 text-black text-xl outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black/40 uppercase text-xs font-bold tracking-widest">Email Address</label>
              <input 
                type="email" 
                placeholder="Email?" 
                className="bg-transparent border-b border-black/20 py-4 text-black text-xl outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black/40 uppercase text-xs font-bold tracking-widest">Phone Number</label>
              <input 
                type="tel" 
                placeholder="Phone" 
                className="bg-transparent border-b border-black/20 py-4 text-black text-xl outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black/40 uppercase text-xs font-bold tracking-widest">Message</label>
            <textarea 
              rows={4}
              placeholder="Your Message" 
              className="bg-transparent border-b border-black/20 py-4 text-black text-xl outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          <button className="w-full py-6 rounded-full border-2 border-black text-black font-bold text-xl uppercase hover:bg-black hover:text-white transition-all">
            Send Message
          </button>
        </motion.div>
      </div>
    </section>
  );
}
