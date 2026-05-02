import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';

export default function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto"
        />
      </FadeIn>

      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 max-w-4xl w-full relative z-10">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text="I'm a Java Developer and Engineering student (ER'27) at IES College of Technology Bhopal. I specialize in Java with DSA, Javascript, and MySQL, with a strong focus on building scalable backend solutions. I'm passionate about investing in future success and continuously expanding my technical toolkit."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[650px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-10">
            <FadeIn delay={0.4} y={20}>
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-white font-bold text-2xl mb-4">Education</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-purple-400 font-bold">IES College of Technology Bhopal</p>
                    <p className="text-white/60 text-sm">Bachelor of Engineering (ER'27)</p>
                    <p className="text-white/40 text-xs">2023 – Present</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <span>📍</span> Bhopal, Madhya Pradesh, India
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} y={20}>
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md h-full">
                <h3 className="text-white font-bold text-2xl mb-4">Certifications</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-start">
                    <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="TCS" className="w-10 h-10 object-contain grayscale invert" />
                    <div>
                      <p className="text-blue-400 font-bold">TCS iON Career Edge</p>
                      <p className="text-white/60 text-sm">Young Professional</p>
                      <p className="text-white/40 text-xs">Issued Apr 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.6} y={20}>
          <div className="flex gap-4 flex-wrap justify-center">
            {['Java', 'DSA', 'Javascript', 'MySQL', 'C Basic', 'Backend Development'].map((skill, index) => (
              <span key={index} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.7} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
