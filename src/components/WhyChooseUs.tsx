import { motion } from 'framer-motion';
import { Leaf, Truck, Headphones, Globe } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: "Healthy Plants Guaranteed",
    description: "Every plant is inspected, cleaned, and carefully packaged before it leaves our greenhouse."
  },
  {
    icon: Truck,
    title: "Free Shipping Over $50",
    description: "We pack with care and ship fast. Enjoy complimentary shipping on all larger orders."
  },
  {
    icon: Headphones,
    title: "Expert Plant Care Support",
    description: "Questions? Our horticulturists are available 7 days a week to help your plants thrive."
  },
  {
    icon: Globe,
    title: "Sustainably Sourced",
    description: "We partner with eco-conscious growers and use 100% biodegradable packaging."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative leaf shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Why Talk to Nature?</h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl font-light">
            We're not just selling plants; we're helping you build a lasting relationship with nature in your own home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-all group-hover:-translate-y-2 group-hover:shadow-xl transform duration-500 border border-white/5">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-4 tracking-wide">{reason.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed font-light">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
