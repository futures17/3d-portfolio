import VideoBackground from './VideoBackground';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/ayushpandit5358/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-pathak-0317m/' },
    { label: 'Github', href: 'https://github.com/ayushpathak' },
  ];

  const contactInfo = [
    { label: 'Email', value: 'ayushpathak@dev.com', href: 'mailto:ayushpathak@dev.com' },
    { label: 'Phone', value: '+91 XXX XXX XXXX', href: 'tel:+91' },
    { label: 'Location', value: 'Bhopal, Madhya Pradesh, India', href: '#' },
  ];

  return (
    <footer className="relative bg-[#0C0C0C] text-white py-20 px-6 sm:px-10 overflow-hidden">
      <VideoBackground 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4" 
        overlayOpacity={0.7}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          {/* Left: Huge Name */}
          <div className="flex flex-col">
            <h2 className="text-7xl sm:text-8xl md:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter">
              AYUSH<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>PATHAK</span>
            </h2>
          </div>

          {/* Right: Social & Contact */}
          <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
            <div className="flex flex-col gap-6">
              <h4 className="text-white/40 uppercase text-xs font-bold tracking-widest">Social</h4>
              <ul className="flex flex-col gap-3">
                {socialLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-xl hover:text-purple-400 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-white/40 uppercase text-xs font-bold tracking-widest">Contact</h4>
              <ul className="flex flex-col gap-4">
                {contactInfo.map((info, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-white/40 text-xs">{info.label}</span>
                    <a href={info.href} className="text-lg hover:text-purple-400 transition-colors">{info.value}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Icons */}
        <div className="flex flex-wrap items-center gap-8 py-10 border-t border-white/10">
          <div className="flex gap-4">
             {/* Simple shapes as placeholder for the colorful icons in the image */}
             <div className="w-12 h-12 rounded-full bg-purple-500" />
             <div className="w-12 h-12 rounded-lg bg-green-400 rotate-45" />
             <div className="w-12 h-12 rounded-[1rem] bg-blue-500" />
             <div className="w-12 h-12 rounded-full bg-pink-500" />
             <div className="w-12 h-12 rounded-lg bg-yellow-400" />
          </div>
          
          <div className="flex-1" />
          
          <div className="flex flex-col items-end gap-2">
            <p className="text-white/40 text-sm">© {currentYear} Ayush Pathak. All rights reserved.</p>
            <p className="text-white/20 text-[10px] uppercase tracking-widest">Built with Passion & React</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
