import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Amanda K.',
    role: 'MedTech Visuals',
    content: "Ayush created detailed models for our medical training program, and the quality was outstanding. The models were precise, realistic, and incredibly useful for our team. We're thrilled with the outcome.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Michael T.',
    role: 'Protosphere Innovations',
    content: "Ayush brought our product concept to life in a way we never thought possible. The 3D model was so detailed and realistic, it helped us secure investors and streamline the manufacturing process. Highly recommend!",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'David R.',
    role: 'Apex Interactive',
    content: "Ayush's character designs exceeded all our expectations. The level of detail, creativity, and responsiveness throughout the project was outstanding. Our game wouldn't be the same without their contributions.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Rachel M.',
    role: 'Metaform Creations',
    content: "Ayush's unique designs made our collection a huge success. The art was breathtaking, and their professionalism made the entire process smooth and enjoyable. Looking forward to collaborating again!",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'James K.',
    role: 'InnovatePro Designs',
    content: "The prototypes Ayush created were perfect for pitching to investors. They brought our vision to life and helped us move forward with confidence.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
  },
];

const ReviewCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[450px] p-6 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-md mx-4">
    <div className="flex items-center gap-4 mb-4">
      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-crop" />
      <div>
        <h4 className="text-white font-bold">{testimonial.name}</h4>
        <p className="text-white/40 text-xs uppercase tracking-wider">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-white/70 text-sm leading-relaxed">
      {testimonial.content}
    </p>
  </div>
);

const InfiniteRow = ({ direction = 'left', speed = 20 }: { direction?: 'left' | 'right', speed?: number }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  return (
    <div className="flex overflow-hidden py-4">
      <motion.div
        animate={{
          x: direction === 'left' ? [-100 * testimonials.length, 0] : [0, -100 * testimonials.length],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex"
      >
        {duplicatedTestimonials.map((t, i) => (
          <ReviewCard key={i} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
};

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-[#0C0C0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            What Clients Are Saying
          </h2>
          <span className="text-6xl">😍</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <InfiniteRow direction="left" speed={40} />
        <InfiniteRow direction="right" speed={50} />
        <InfiniteRow direction="left" speed={45} />
      </div>
    </section>
  );
}
